import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TestauthController } from './controllers/testauth/testauth.controller';

@Module({
  imports: [AuthModule],
  controllers: [AppController, TestauthController],
  providers: [AppService],
})
export class AppModule {}
