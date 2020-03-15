<a href="https://community.sap.com/topics/cloud-sdk"><img src="https://help.sap.com/doc/2324e9c3b28748a4ae2ad08166d77675/1.0/en-US/logo-with-js.svg" alt="SAP Cloud SDK for JavaScript Logo" height="122.92" width="226.773"/></a>

# Testing XSSEC with NestJS flavour of SAP Cloud SDK
Clone the project, npm install, create the _default-env.json_ file, providing VCAP_SERVICES variable for xsuaa:
```json
    "VCAP_SERVICES": {
        "xsuaa": [{
            "label": "xsuaa",
            "provider": null,
            "plan": "application",
            "name": "your-xsuaa-service-name",
            "tags": [
                "xsuaa"
            ],
            "instance_name": "your-instance-name",
            "binding_name": null,
            "credentials": {
                '...'
            },
            "syslog_drain_url": null,
            "volume_mounts": []
        }]
    }
```
Go to approuter folder, npm install and create another _default-env.json_ file, provide the same VCAP_SERVICES as above and plus add:
```json    
    "destinations": [{
        "name": "srv_api",
        "url": "http://localhost:3000",
        "forwardAuthToken": true
    }]
```

If needed, adapt _manifest.yml_ in both root and approuter folders to match your service instance names.

Passport Strategy configuration are provided in [AuthModule](https://github.com/robypag/sapcloudsdk-nestjs-xsuaa/tree/master/src/auth).

Open 2 terminal windows:

Approuter `cd approuter && npm start`

Project Root `npm run start:dev`

Open `http://localhost:5000/testauth` provide your credentials in XSUAA login page and observe the error in the terminal.

## NestJS

NestJS is a progressive [Node.js](http://nodejs.org) framework for building efficient and scalable server-side applications, heavily inspired by [Angular](https://angular.io). 

The [Nest CLI](https://docs.nestjs.com/cli/usages) is a powerful tool and can help you create new controllers, modules and interfaces.

## License and Notice

The SAP Cloud SDK CLI is licensed under the [Apache Software License, v. 2](https://github.com/SAP/cloud-sdk-cli/blob/master/LICENSE). 
Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

The SAP Cloud SDK is in no way affiliated with or endorsed by Nest and its maintainers.
While Nest is our recommendation, the SAP Cloud SDK can be used with any framework, so you are free to choose what you are comfortable with.
