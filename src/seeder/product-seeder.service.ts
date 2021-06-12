import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BranchEntity } from '../entities/branch.entity';
import { ColorEntity } from '../entities/color.entity';
import { ProductEntity } from '../entities/product.entity';

const faker = require('faker');

@Injectable()
export class ProductSeederService {
  constructor(@InjectRepository(ProductEntity) private productRepo: Repository<ProductEntity>) {}

  async seed(branches: BranchEntity[], colors: ColorEntity[], amount = 1) {
    const products = [];
    for (const branch of branches) {
      for (const color of colors) {
        for (let i = 0; i < amount; i++) {
          const product = await this.productRepo.save({
            branch,
            color,
            name: faker.random.word(),
          });
          products.push(product);
        }
      }
    }
    return products;
  }
}
