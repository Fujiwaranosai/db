import { ApiProperty } from '@nestjs/swagger';
import { CrudValidationGroups } from '@nestjsx/crud';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { BaseEntity } from './base.entity';
import { ProductEntity } from './product.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity({ name: 'order' })
export class OrderEntity extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  @IsOptional({ groups: [CREATE] })
  @IsNotEmpty({ groups: [UPDATE] })
  id: number;

  @ApiProperty()
  @IsOptional({ groups: [UPDATE] })
  @IsNumber()
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ name: 'agent_id', nullable: false })
  agentId: number;

  @ApiProperty()
  @IsString()
  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @Column({ name: 'order_info' })
  orderInfo: string;

  @ApiProperty({ isArray: true, type: () => ProductEntity })
  @ManyToMany(() => ProductEntity)
  @JoinTable({ name: 'order_product' })
  products: ProductEntity[];
}
