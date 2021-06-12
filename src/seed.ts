import { NestFactory } from '@nestjs/core';

import { BranchSeederService } from './seeder/branch-seeder.service';
import { ColorSeederService } from './seeder/color-seeder.service';
import { ProductSeederService } from './seeder/product-seeder.service';
import { SeederModule } from './seeder/seeder.module';

async function bootstrap() {
  const context = await NestFactory.createApplicationContext(SeederModule);
  const productSeeder = context.get(ProductSeederService);
  const branchSeeder = context.get(BranchSeederService);
  const colorSeeder = context.get(ColorSeederService);

  const branches = await branchSeeder.seed(3);
  const colors = await colorSeeder.seed(5);
  await productSeeder.seed(branches, colors, 10);
}
bootstrap().then(() => console.log('done bootstrap'));
