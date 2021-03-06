/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    /**
     * Check the provided email address and password, and if they
     * match a real user in the database, sign in to Medool.
     */
    login: function (req, res) {

        // Try to look up user using the provided email address
        User.findOne({
            email: req.param('email')
        }, function foundUser(err, user) {
            if (err)
                return res.negotiate(err);
            if (!user)
                return res.notFound();

            // Compare password attempt from the form params to the encrypted password
            // from the database (`user.password`)
            require('machinepack-passwords').checkPassword({
                passwordAttempt: req.param('password'),
                encryptedPassword: user.encryptedPassword
            }).exec({
                error: function (err) {
                    return res.negotiate(err);
                },
                /*
                 If the password from the form params doesn't checkout w/ the encrypted
                 password from the database...
                 */
                incorrect: function () {
                    return res.notFound();
                },
                success: function () {

                    // Store user id in the user session
                    console.log(user)
                    req.session.me = user.id;

                    // All done- let the client know that everything worked.
                    return res.ok();
                }
            });
        });

    },
    /**
     * Sign up for a user account.
     */
    signup: function (req, res) {


        var Passwords = require('machinepack-passwords');

        // Encrypt a string using the BCrypt algorithm.
        Passwords.encryptPassword({
            password: req.param('password'),
            difficulty: 10,
        }).exec({
            // An unexpected error occurred.
            error: function (err) {
                return res.negotiate(err);
            },
            // OK.
            success: function (encryptedPassword) {
                require('machinepack-gravatar').getImageUrl({
                    emailAddress: req.param('email')
                }).exec({
                    error: function (err) {
                        return res.negotiate(err);
                    },
                    success: function (gravatarUrl) {
                        // Create a User with the params sent from
                        // the sign-up form --> signup.ejs
                        User.create({
                            firstname: req.param('firstname'),
                            lastname: req.param('lastname'),
                            title: req.param('title'),
                            email: req.param('email'),
                            mobile: req.param('mobile'),
                            gender: req.param('gender'),
                            encryptedPassword: encryptedPassword,
                            lastLoggedIn: new Date(),
                            gravatarUrl: gravatarUrl
                        }, function userCreated(err, newUser) {
                            if (err) {

                                console.log("err: ", err);
                                console.log("err.invalidAttributes: ", err.invalidAttributes)

                                // If this is a uniqueness error about the email attribute,
                                // send back an easily parseable status code.
                                if (err.invalidAttributes && err.invalidAttributes.email && err.invalidAttributes.email[0]
                                        && err.invalidAttributes.email[0].rule === 'unique') {
                                    return res.emailAddressInUse();
                                }

                                // Otherwise, send back something reasonable as our error response.
                                return res.negotiate(err);
                            }

                            // Log user in
                            req.session.me = newUser.id;

                            // Send back the id of the new user
                            return res.json({
                                id: newUser.id

                            });
                        });
                    }
                });
            }
        });
    },
    /**
     * Log out of Activity Overlord.
     * (wipes `me` from the sesion)
     */
    logout: function (req, res) {

        // Look up the user record from the database which is
        // referenced by the id in the user session (req.session.me)
        User.findOne(req.session.me, function foundUser(err, user) {
            if (err)
                return res.negotiate(err);

            // If session refers to a user who no longer exists, still allow logout.
            if (!user) {
                sails.log.verbose('Session refers to a user who no longer exists.');
                return res.backToHomePage();
            }

            // Wipe out the session (log out)
            req.session.me = null;

            // Either send a 200 OK or redirect to the home page
            return res.backToHomePage();

        });
    },
    //admin index view
    index: function (req, res, next) {
        //Cheking the authentication of the session of user
        console.log(new Date());
        console.log(req.session.authenticated);



        // Get an array of all users in the User collection(e.g. table)
        User.find(function foundUsers(err, users) {
            if (err)
                return next(err);
            // pass the array down to the /views/index.ejs page

            res.view({
                users: users,
                layout: false
            });
        });
    },
    // render the profile view (e.g. /views/show.ejs)
    show: function (req, res, next) {
        User.findOne(req.param('id'), function foundUser(err, user) {
            if (err)
                return next(err);
            if (!user)
                return next();
            res.view({
                user: user
            });
        });
    },
//   userprofile : function(req, res, next) {
//    User.findOne(req.param('id'), function foundUser(err, user) {
//      if (err) return next(err);
//      if (!user) return next();
////      res.view({
////        user: user
////      });
//        return res.json({
//              notFound:false,
//              userData:user
//            });
//    });
//    },

    //Edit user form adim page
    // render the edit view (e.g. /views/edit.ejs)
    edit: function (req, res, next) {

        // Find the user from the id passed in via params
        User.findOne(req.param('id'), function foundUser(err, user) {
            if (err)
                return next(err);
            if (!user)
                return next('User doesn\'t exist.');

            res.view({
                user: user
            });
        });
    },
    //get the valuse form the edit and then shows in update
//  update : function (req, res, next){
//
//      User.update(req.param('id'), req.params.all(), function userUpdate(err){
//
//          if (err){
//              return res.redirect('user/edit/'+ req.param('id'))
//          }
//          res.redirect('/user/show/' + req.param('id'));
//      });
//  },
    // process the info from edit view
    update: function (req, res, next) {

//    if (req.session.User.admin) {
//      var userObj = {
//        name: req.param('name'),
//        title: req.param('title'),
//        email: req.param('email'),
//        admin: req.param('admin')
//      }
//    } else {
//      var userObj = {
//        name: req.param('name'),
//        title: req.param('title'),
//        email: req.param('email')
//      }
//    }

        User.update(req.param('id'), req.params.all(), function userUpdated(err) {
            if (err) {
                return res.redirect('/user/edit/' + req.param('id'));
            }

            res.redirect('/user/show/' + req.param('id'));
        });
    },
    destroy: function (req, res, next) {

        User.findOne(req.param('id'), function foundUser(err, user) {
            if (err)
                return next(err);

            if (!user)
                return next('User doesn\'t exist.');

            User.destroy(req.param('id'), function userDestroyed(err) {
                if (err)
                    return next(err);

                // Inform other sockets (e.g. connected sockets that are subscribed) that this user is now logged in
                User.publishUpdate(user.id, {
                    name: user.name,
                    action: ' has been destroyed.'
                });

                // Let other sockets know that the user instance was destroyed.
                User.publishDestroy(user.id);

            });

            res.redirect('/user');

        });
    }

};
