import { Controller, Get, UseGuards } from '@nestjs/common';
import { XsuaaGuard } from 'src/auth/xsuaa.guard';

@Controller('testauth')
export class TestauthController {

    @Get()
    @UseGuards(XsuaaGuard)
    testAuthentication(): string {
        return 'If you see this you are authenticated';
    }

}
