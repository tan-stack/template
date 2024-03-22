import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'node:path';
import { apiConfig } from './api.config';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';

@Module({
    imports: [
        ConfigModule.forRoot({
            cache: true,
            ignoreEnvFile: true,
            isGlobal: true,
            load: [apiConfig],
        }),
        ServeStaticModule.forRoot({
            // eslint-disable-next-line unicorn/prefer-module
            rootPath: join(__dirname, '..', 'app'),
        }),
    ],
    controllers: [ApiController],
    providers: [ApiService],
})
export class ApiModule { }
