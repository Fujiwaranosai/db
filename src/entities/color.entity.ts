import { ApiProperty } from '@nestjs/swagger';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { ProductEntity } from './product.entity';

@Entity({ name: 'color' })
export class ColorEntity extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ nullable: false })
  name: string;

  @ApiProperty()
  @Column({ nullable: false })
  value: string;

  @OneToMany((type) => ProductEntity, (t) => t.color)
  products: ProductEntity[];
}
