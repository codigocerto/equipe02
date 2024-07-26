import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import * as momentTimezone from 'moment-timezone';
import { AllExceptionsFilter } from './common/filters/http-expections';
import { ClassSerializerInterceptor } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  Date.prototype.toJSON = () => {
    return momentTimezone(this)
      .tz('America/Sao_Paulo')
      .format('DD-MM-YYYY HH:mm:ss');
  };

  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  await app.listen(3000);
}
bootstrap();
