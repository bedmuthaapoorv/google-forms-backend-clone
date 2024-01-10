// function: to populate routes with api endpoints / map path to corresponding business logic

'use strict'

const controller=require('./apiEndpoints.js');

// while hosting make sure to comment out the services you do not need

exports.routes=(app)=>{
    app.route('/').get((req, res)=>{
        res.send('App is working')
    });
    // for creation of a new account
    app.route('/createAccountService').post(controller.authenticationService.createAccountService);
    
    // 2 factor authentication
    app.route('/twoFAService').post(controller.authenticationService.twoFAService);

    // 2 factor authentication
    app.route('/validateOTPService').post(controller.authenticationService.validateOTPService);

    // create form service
    app.route('/createFormService').post(controller.formService.createFormService);

    // edit form service
    app.route('/editFormService').get(controller.formService.editFormService);

    // // post process logic response
    // app.route('/postProcessFormService').get(controller.postProcessFormService);

    // get form
    app.route('/getFormService').post(controller.formService.getFormService);

    // response storage
    app.route('/responseStorageService').post(controller.responseService.responseStorageService);

    // // logging service
    // app.route('/loggingService').get(controller.loggingService);

    // google sheet generation service
    app.route('/googleSheetService').post(controller.googleSheetService.exportToSheetService);

}

