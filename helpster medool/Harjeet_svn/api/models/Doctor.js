/**
 * Doctor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    schema: true,
    tableName: 'doctor',
    attributes: {
        doctorID: {
            type: 'integer',
            required: true,
            autoIncrement: true,
            primaryKey: true,
            columnName: 'doctorID'

        },
        specilization: {
            enum: ['gyno', 'dentist', 'physyo', 'general'],
            defaultsTo: 'general',
            required: true,
            columnName: 'specilization'
        },
        degree: {
            type: "string",
            maxLength: 25,
            minLength: 4,
            required: true,
            columnName: 'degree'
        },
        mciNumber: {
            type: "integer",
            integer: true,
            required: true,
            unique: true,
            columnName: 'mciNumber'
        },
        collegeName: {
            type: "string",
            required: true,
            maxLength: 40,
            minLength: 4,
            columnName: 'collegeName'
        },
        passedOutYear: {
            type: "date",
            required: true,
            date: true,
            columnName: 'passedOutYear'
        },
        otherCertification: {
            type: "string",
            required: false,
            maxLength: 40,
            minLength: 4,
            columnName: 'otherCertification'
        },
        experienceYear: {
            type: "integer",
            required: true,
            integer: true,
            columnName: 'experienceYear'
        },
        homeAddress: {
            type: "string",
            required: true,
            maxLength: 60,
            minLength: 10,
            columnName: 'homeAddress'
        },
        presentEmployer: {
            type: "string",
            maxLength: 20,
            minLength: 5,
            columnName: 'presentEmployer'
        },
        pastEmployer: {
            type: "string",
            maxLength: 20,
            minLength: 5,
            columnName: 'pastEmployer'
        },
        photo: {
            type: "file",
            maxLength: 20,
            minLength: 5,
            columnName: 'photo'
        },
        fee: {
            type: "integer",
            maxLength: 6,
            minLength: 3,
            columnName: 'fee'
        },
        skypeId: {
            type: 'string',
            email: true,
//          required: true,
            unique: true,
            columnName: 'skypeId'
        },
        registrationDate: {
            type: 'date',
            date: true,
//         required: true,
            columnName: 'dob'
        },
        locked: {
            type: 'string',
//         required: true,
            columnName: 'dob'
        },
        deleted: {
            type: 'string',
//         required: true,
            columnName: 'delted'
        },
        flag: {
            type: 'boolean',
            boolean: true,
//         required: true,
            columnName: 'flag'
        }
    }

};

