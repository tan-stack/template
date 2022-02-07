import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'node:path';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'app'),
        }),
    ],
    controllers: [ApiController],
    providers: [ApiService],
})
export class ApiModule { }
