import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JWTStrategy } from '@sap/xssec';
import { getServices } from '@sap/xsenv';
import * as xsenv from '@sap/xsenv';

@Injectable()
export class XsuaaStrategy extends PassportStrategy(JWTStrategy, 'JWT') {
    
    constructor() {
        xsenv.loadEnv();
        const xsuaa = getServices({ xsuaa: { tag: 'xsuaa' } }).xsuaa;
        super(xsuaa, 'XSUAA');
    }

    validate(payload: any) {
        return payload;
    }
}
