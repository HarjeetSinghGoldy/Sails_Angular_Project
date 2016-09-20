/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    schema: true,
    tableName: 'user',
    
    attributes: {
//        individualId :{
//            type:'integer',
//            required: true,
//            defaultsTo : 0,
//            autoIncrement: true,
//            primaryKey: true
//        },
        title: {
            enum:['doctor','patient','pharmacist','pathologist'],
            defaultsTo: 'patient',
            required: true,
            columnName: 'title'
        },
        firstname: {
            type: 'string',
            required: true,
            minLength: 3,
            maxLength: 20,
            columnName: 'firstname'
        },
        lastname: {
            type: 'string',
            required: true,
            minLength: 3,
            maxLength: 20,
            columnName: 'lastname'
            
        },
        mobile: {
            type: 'integer',
            integer: true,
            required: true,
            maxLength: 10, 
            columnName: 'mobile'
        },
        email: {
            type: 'string',
            email: true,
            required: true,
            unique: true,
            columnName: 'email'
        },
        encryptedPassword: {
            type: 'string',
            columnName: 'encryptedPassword'
        },
        gender: {
            enum: ['male','female'],
            defaultsTo: 'male',
            required: true,
            columnName: 'gender'
            
        },
        online: {
            type: 'boolean',
            defaultsTo: false,
            columnName: 'gender'
        },
        admin: {
            type: 'boolean',
            defaultsTo: false,
            columnName: 'admin'
        },
        dob: {
            type: 'date',
//            date: true,
//            required: true,
            columnName: 'dob'
        },
        
        toJSON: function () {
            var obj = this.toObject();
            delete obj.password;
            delete obj.confirmation;
            delete obj.encryptedPassword;
            delete obj._csrf;
            delete obj.individualId;
            return obj;
        }

    },
    beforeValidation: function (values, next) {
        if (typeof values.admin !== 'undefined') {
            if (values.admin === 'unchecked') {
                values.admin = false;
            } else if (values.admin[1] === 'on') {
                values.admin = true;
            }
        }
        next();
    }
    
//    beforeCreate : function (values, cb) {
//
//        // add seq number, use
//        Sequence.next("user", function(err, id) {
//
//            if (err) return cb(err);
//
//            values.IndividualId = id;
//
//            cb();
//        });
//    }
//
//  beforeCreate: function (values, next) {
//
//    // This checks to make sure the password and password confirmation match before creating record
//    if (!values.password || values.password != values.confirmation) {
//      return next({err: ["Password doesn't match password confirmation."]});
//    }
//
//    require('bcrypt').hash(values.password, 10, function passwordEncrypted(err, encryptedPassword) {
//      if (err) return next(err);
//      values.encryptedPassword = encryptedPassword;
//      // values.online= true;
//      next();
//    });
//  }

};
