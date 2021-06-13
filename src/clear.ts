import { NestFactory } from '@nestjs/core';

import { DatabaseService } from './database/database.service';
import { SeederModule } from './seeder/seeder.module';

async function bootstrap() {
  const context = await NestFactory.createApplicationContext(SeederModule);
  const databaseService = context.get(DatabaseService);
  await databaseService.clean();
}
bootstrap().then(() => console.log('done bootstrap'));
