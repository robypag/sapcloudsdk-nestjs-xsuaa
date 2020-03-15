import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common';
import { Strategy, ExtractJwt } from 'passport-jwt';
import * as xssec from '@sap/xssec';
import * as xsenv from '@sap/xsenv';

@Injectable()
export class XsuaaStrategy extends PassportStrategy(Strategy, 'xsuaa') {

    constructor() {
        // ?? Load environment from default-env.json
        xsenv.loadEnv();
        // ?? Extract XSUAA configuration:
        const uaaOptions = xsenv.getServices({ uaa: { tag: 'xsuaa' } }).uaa;
        // !! Provide Passport with the authentication callback --> this will fail
        super({
            secretOrKeyProvider: new xssec.JWTStrategy(uaaOptions),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        });
    }

    validate(payload: any) {
        return payload;
    }

}
