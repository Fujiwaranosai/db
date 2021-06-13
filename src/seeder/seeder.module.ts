import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseService } from '../database/database.service';
import { BranchEntity } from '../entities/branch.entity';
import { ColorEntity } from '../entities/color.entity';
import { ProductEntity } from '../entities/product.entity';
import { BranchSeederService } from './branch-seeder.service';
import { ColorSeederService } from './color-seeder.service';
import { ProductSeederService } from './product-seeder.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        autoLoadEntities: true,
        database: configService.get('DATABASE_NAME'),
        host: configService.get('DATABASE_HOST'),
        keepConnectionAlive: true,
        logging: true,
        password: configService.get('DATABASE_PASS'),
        port: Number(configService.get('DATABASE_PORT')),
        synchronize: true,
        type: 'postgres',
        username: configService.get('DATABASE_USER'),
      }),
    }),
    TypeOrmModule.forFeature([ProductEntity, BranchEntity, ColorEntity]),
  ],
  providers: [BranchSeederService, ColorSeederService, ProductSeederService, DatabaseService],
})
export class SeederModule {}
