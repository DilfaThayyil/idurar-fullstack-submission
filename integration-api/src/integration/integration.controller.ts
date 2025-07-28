import { Controller, Get, Post, Body } from '@nestjs/common';
import { IntegrationService } from './integration.service';
import { CreateWebhookDto } from './dto/create-webhook.dto';

@Controller('integration')
export class IntegrationController {
    constructor(private readonly service: IntegrationService) { }

    @Get('reports/summary')
    getSummary() {
        return this.service.generateSummary();
    }

    @Post('webhook')
    handleWebhook(@Body() payload: CreateWebhookDto) {
        return this.service.processWebhook(payload);
    }
}
