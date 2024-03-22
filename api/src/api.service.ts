import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApiConfig } from './api.config';

@Injectable()
export class ApiService {

    public constructor(
        private readonly configService: ConfigService<ApiConfig>,
    ) { }

    public getOption(): string {
        return this.configService.get('opt1') || 'default option';
    }

}
