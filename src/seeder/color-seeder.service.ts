import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ColorEntity } from '../entities/color.entity';

const faker = require('faker');

@Injectable()
export class ColorSeederService {
  constructor(@InjectRepository(ColorEntity) private colorRepo: Repository<ColorEntity>) {}

  async seed(amount = 1) {
    const colors = [];
    for (let i = 0; i < amount; i++) {
      const color = await this.colorRepo.save({
        name: faker.random.word(),
        value: faker.random.word(),
      });
      colors.push(color);
    }
    return colors;
  }
}
