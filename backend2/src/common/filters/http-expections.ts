import {
  ArgumentsHost,
  Catch,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: any, host: ArgumentsHost) {
    const context = host.switchToHttp();

    const request = context.getRequest();
    const response = context.getResponse();

    const statusCode =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException ? exception.getResponse() : '';

    this.logger.error(
      `Http Status: ${statusCode} Error message: ${JSON.stringify(message)}`,
    );

    response.status(statusCode).json({
      timestamp: new Date().toISOString(),
      path: request.url,
      error: message,
    });
  }
}
