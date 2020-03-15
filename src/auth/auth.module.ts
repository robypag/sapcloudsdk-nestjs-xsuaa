import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { XsuaaStrategy } from './xsuaa.strategy';

@Module({
    imports: [PassportModule.register({ defaultStrategy: 'xsuaa' })],
    providers: [XsuaaStrategy],
    exports: [PassportModule]
})
export class AuthModule { }
