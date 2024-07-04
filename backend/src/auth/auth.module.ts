import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/register/users.module';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'G9C7P2YG6Nt3s2CQubr8NglsMFH7CgUb',
      signOptions: {
        expiresIn: '24h',
      },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
