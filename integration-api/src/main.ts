import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  const config = new DocumentBuilder()
    .setTitle('Integration API')
    .setDescription('Endpoints for reporting and webhook')
    .setVersion('1.0')
    .addTag('integration')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); 
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
