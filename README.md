# Google Forms Backend Clone API

## Overview

This is a scalable Google Forms backend clone written in Node.js that provides an API to interact with the system. Developers can self-host this project, eliminating the need to share data with third-party services like Google when implementing forms.

If you find any bugs, raise an issue or please email bedmuthaapoorv@gmail.com. We aim to improve the API over time, ensuring that all changes remain backward compatible.

Currently, there is no rate limit implemented.

## Getting Started

Ensure that Docker is installed on your system and you are inside the project folder after cloning.

1. Start the application:
   ```
   docker-compose up
   ```

2. Wait until you see "app is working at 3000" in the terminal.

3. The API endpoint will be available at: `http://localhost:3000/`

## API Documentation

### Create Account
- Endpoint: `/createAccountService`
- Method: POST
- Body:
  ```json
  {
    "username": "your-username",
    "password": "your-password",
    "contact": "your-contact-number",
    "email": "your-email-address",
    "type": 0
  }
  ```
- Response: "account added" on success / error message on failure

### Two-Factor Authentication
- Endpoint: `/twoFAService`
- Method: POST
- Body:
  ```json
  {
    "username": "your-username",
    "password": "your-password"
  }
  ```
- Response: "OTP sent to: your-email-address" / error message on failure

### Validate OTP
- Endpoint: `/validateOTPService`
- Method: POST
- Body:
  ```json
  {
    "username": "your-username",
    "otp": your-otp
  }
  ```
- Response: true on success / false on failure
  ```json
  {
    "output": true
  }
  ```

### Create Form
- Endpoint: `/createFormService`
- Method: POST
- Body:
  currently type is always one more types will be supported in subsequent releases
  ```json
  {
    "questions": [
      {
        "qcode": unique-integer-for-question-code,
        "text": "what is your name",
        "type": 1
      }
    ],
    "metadata": {
      "author": "your-username",
      "timestamp": "dd-mm-yyyy"
    },
    "formID": "unique-integer-for-form-id"
  }
  ```
- Response: "form created"

### Get Form
- Endpoint: `/getFormService`
- Method: POST
- Body:
  ```json
  {
    "formID": "form-id-of-requested-form"
  }
  ```
- Response: (Form details)

### Store Response
- Endpoint: `/responseStorageService`
- Method: POST
- Body:
  ```json
  {
    "formID": "form-id",
    "responderID": "unique-responder-id",
    "responseID": "unique-response-id",
    "response": {
      "question-code-for-respective-response": "answer-to-question-1",
      "question-code-for-respective-response": "answer-to-question-2"
    }
  }
  ```
- Response: "response recorded" on success / error message on failure

### Export to Google Sheets
- Endpoint: `/googleSheetService`
- Method: POST
- Body:
  ```json
  {
    "formID": "form-id-of-the-form-to-be-exported",
    "spreadsheetId": "spreadsheet-id-of-the-sheet-you-want-to-export-to",
    "sheetName": "sheet-name-of-the-sheet-you-want-to-export-to"
  }
  ```
- Response: "your data is exported to, please clone link-to-your-spreadsheet"

## Additional Information

For an in-depth understanding of the system design, please refer to the [System Design Document] (https://drive.google.com/file/d/15LPZUdEqSWV-3q5gj1yXelG_mBtxmZVM/view?usp=sharing).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

Yours truly,
Apoorv Bedmutha
