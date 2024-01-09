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
    
    // // SMS service
    // app.route('/smsService').get(controller.smsService);
    
    // // email service
    // app.route('/emailService').get(controller.emailService);

    // create form service
    app.route('/createFormService').post(controller.formService.createFormService);

    // // SMS service
    // app.route('/editFormService').get(controller.editFormService);

    // // SMS service
    // app.route('/getFormService').get(controller.getFormService);

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

