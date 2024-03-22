import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api.module';
import { INestApplication } from '@nestjs/common';

async function bootstrap(): Promise<void> {
    const app: INestApplication = await NestFactory.create(ApiModule);
    app.enableCors();
    app.setGlobalPrefix('api');
    await app.listen(3000);
}
bootstrap().catch(() => { });
