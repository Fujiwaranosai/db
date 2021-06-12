import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { ProductEntity } from './product.entity';

@Entity({ name: 'branch' })
export class BranchEntity extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ nullable: false })
  name: string;

  @OneToMany(() => ProductEntity, (t) => t.branch)
  products: ProductEntity[];
}
