import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Swagger Configuration
  const cnfig = new DocumentBuilder()
    .setTitle('FieldOps API')
    .setDescription('API documentation for FieldOps application')
    .setVersion('1.0')
    .addTag('API List')
    .addBearerAuth( // This defines the "Authorize" button
    {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'JWT',
      description: 'Enter JWT token',
      in: 'header',
    },
    'JWT-auth', // This is a unique name for this security scheme
  )
    .build();
  const document = SwaggerModule.createDocument(app, cnfig);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
