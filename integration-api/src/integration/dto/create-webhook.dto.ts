import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateWebhookDto {
  @ApiProperty({ example: 'crm-system' })
  @IsString()
  @IsNotEmpty()
  source: string;

  @ApiProperty({ example: 'New lead created' })
  @IsString()
  @IsNotEmpty()
  message: string;
}
