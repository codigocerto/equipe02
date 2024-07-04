import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './register/users.module';
import { ContactModule } from './contact/contact.module';
import { TypeOrmConfigModule } from './configs/typeOrmConfig.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmConfigModule, UsersModule, ContactModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
