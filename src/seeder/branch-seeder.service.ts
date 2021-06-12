import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BranchEntity } from '../entities/branch.entity';

const faker = require('faker');

@Injectable()
export class BranchSeederService {
  constructor(@InjectRepository(BranchEntity) private branchRepo: Repository<BranchEntity>) {}

  async seed(amount = 1) {
    const branches = [];
    for (let i = 0; i < amount; i++) {
      const branch = await this.branchRepo.save({
        name: faker.random.word(),
      });
      branches.push(branch);
    }
    return branches;
  }
}
