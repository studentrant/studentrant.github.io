define({ "api": [
  {
    "type": " post ",
    "url": "/login",
    "title": "login user",
    "name": "login",
    "group": "Login",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "size": "5..",
            "optional": true,
            "field": "username",
            "description": "<p>The username of the user who wants to login, if username is absent, email address should be used</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "email",
            "description": "<p>The email address of the user who wants to login, if email address is absent, username should be used</p>"
          },
          {
            "group": "Parameter",
            "type": "password",
            "size": "8..",
            "optional": false,
            "field": "password",
            "description": "<p>Users Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   username: \"foobar\",\n   password: \"HelloWorld123455!!\"\n}",
          "type": "json"
        },
        {
          "title": "Request-Example:",
          "content": "{\n   email: \"foobar@example.com\",\n   password: \"HelloWorld123455!!\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email address of user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>Username of user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "avatar",
            "description": "<p>Avatar of user</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "dateOfReg",
            "description": "<p>Timestamp of when user registered</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "verified",
            "description": "<p>Email verification status of user</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "completeReg",
            "description": "<p>Flag to determine if user has complete the registration process</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    message  : {\n       email       : \"foobar@example.com\"\n       username    : \"foobar\"\n       completeReg : true,\n       verified    : true,\n       avatar      : \"https://lbalbal/balbal\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INVALID_LOGIN_USERNAME_EMAIL_NO_FIELD",
            "description": "<p>username/email field is undefined</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INVALID_LOGIN_USERNAME_LENGTH",
            "description": "<p>username length is less than 5</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INVALID_LOGIN_PASSWORD_NO_FIELD",
            "description": "<p>password field is undefined</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INVALID_LOGIN_PASSWORD_LENGTH",
            "description": "<p>password field is less than 8</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INVALID_LOGIN_PASSWORD_NO_DIGIT",
            "description": "<p>password does not contain any number</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INVALID_LOGIN_PASSWORD_NO_CHARS",
            "description": "<p>password does not contain any characters</p>"
          }
        ]
      }
    },
    "filename": "doc/login.doc.js",
    "groupTitle": "Login"
  },
  {
    "type": " post ",
    "url": "/register/reg-first-step",
    "title": "First registration step of user",
    "name": "firstRegStep",
    "group": "Register",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email address of user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "size": "5..",
            "optional": false,
            "field": "username",
            "description": "<p>username of user</p>"
          },
          {
            "group": "Parameter",
            "type": "password",
            "size": "8..",
            "optional": false,
            "field": "password",
            "description": "<p>password of user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   email   : \"foobar@example.com\",\n   username: \"foobar\",\n   password: \"HelloWorld123455!!\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code response</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "message",
            "description": "<p>response message to be consumed by the client</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message.email",
            "description": "<p>email address of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message.username",
            "description": "<p>username of the suer</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "allowedValues": [
              "false"
            ],
            "optional": false,
            "field": "message.completeReg",
            "description": "<p>This value is set to false because the user has not completed the second registration step, if user decides to logout and login back, this property should be check first to know if the user should be taken to the dashboard or the second registration step</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "allowedValues": [
              "false"
            ],
            "optional": false,
            "field": "message.verified",
            "description": "<p>This value is set to false until the user has verified their email address, if the user has not verified the email address, they should always see a message on their dashboard telling them to verify their email address</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    status: 201,\n    message  : {\n       email       : \"foobar@example.com\"\n       username    : \"foobar\"\n       completeReg : false,\n       verified    : false\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INVALID_LOGIN_USERNAME_EMAIL_NO_FIELD",
            "description": "<p>username/email field is undefined</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INVALID_LOGIN_USERNAME_LENGTH",
            "description": "<p>username length is less than 5</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INVALID_LOGIN_PASSWORD_NO_FIELD",
            "description": "<p>password field is undefined</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INVALID_LOGIN_PASSWORD_LENGTH",
            "description": "<p>password field is less than 8</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INVALID_LOGIN_PASSWORD_NO_DIGIT",
            "description": "<p>password does not contain any number</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INVALID_LOGIN_PASSWORD_NO_CHARS",
            "description": "<p>password does not contain any characters</p>"
          }
        ]
      }
    },
    "filename": "doc/register.doc.js",
    "groupTitle": "Register"
  },
  {
    "type": " patch ",
    "url": "/register/reg-last-step",
    "title": "Last registration step of user",
    "name": "lastRegStep",
    "group": "Register",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "country",
            "description": "<p>country of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "interests",
            "description": "<p>what the user is interested in (we would use their interest to show them rants)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "\n{\n   country: \"Nigeria\",\n   interests: [ \"teaching\", \"rant\", \"gossip\" ]\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code response</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "message",
            "description": "<p>response message to be consumed by the client</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message.email",
            "description": "<p>email address of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message.username",
            "description": "<p>username of the suer</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "allowedValues": [
              "true"
            ],
            "optional": false,
            "field": "message.completeReg",
            "description": "<p>This value is set to true because the user has completed the registration step</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "allowedValues": [
              "false"
            ],
            "optional": false,
            "field": "message.verified",
            "description": "<p>This value is set to false until the user has verified their email address, if the user has not verified the email address, they should always see a message on their dashboard telling them to verify their email address</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    status: 201,\n    message  : {\n       email       : \"foobar@example.com\"\n       username    : \"foobar\"\n       completeReg : false,\n       verified    : false\n\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "COUNTRY_PROPERTY_UNDEFINED",
            "description": "<p>country is undefined</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INVALID_COUNTRY_LENGTH",
            "description": "<p>country length is less than 1</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NO_INTEREST_FIELD",
            "description": "<p>interests is undefined</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NO_ARRAY_INTEREST",
            "description": "<p>interests is not an array field</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NO_INTEREST_LENGTH",
            "description": "<p>interest array length is 0</p>"
          }
        ]
      }
    },
    "filename": "doc/register.doc.js",
    "groupTitle": "Register"
  },
  {
    "type": " patch ",
    "url": "/register/verification/:token",
    "title": "Verify user token",
    "name": "tokenVerification",
    "group": "Register",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>verification token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>http status code response</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "message",
            "description": "<p>response message to be consumed by the client</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message.email",
            "description": "<p>email address of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "message.username",
            "description": "<p>username of the suer</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "allowedValues": [
              "true"
            ],
            "optional": false,
            "field": "message.completeReg",
            "description": "<p>This value is set to true because the user has completed the registration step</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "allowedValues": [
              "true"
            ],
            "optional": false,
            "field": "message.verified",
            "description": "<p>This value is set to false until the user has verified their email address, if the user has not verified the email address, they should always see a message on their dashboard telling them to verify their email address</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    status: 200,\n    message  : {\n       email       : \"foobar@example.com\"\n       username    : \"foobar\"\n       completeReg : false,\n       verified    : false\n\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "INVALID_VERIFICATION_TOKEN",
            "description": ""
          }
        ]
      }
    },
    "filename": "doc/register.doc.js",
    "groupTitle": "Register"
  }
] });