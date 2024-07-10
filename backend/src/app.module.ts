import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './domain/users.module';
import { TypeOrmConfigModule } from './configs/typeOrmConfig.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmConfigModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
