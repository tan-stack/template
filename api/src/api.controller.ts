import { Controller, Get, Logger } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller()
export class ApiController {

    private readonly logger: Logger = new Logger(ApiController.name);

    public constructor(
        private readonly apiService: ApiService,
    ) { }

    @Get()
    public getHello(): ApiResult<string> {
        this.logger.log('Got request for getHello');
        return { ok: true, data: this.apiService.getOption() };
    }

}
