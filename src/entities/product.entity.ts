import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { BaseEntity } from './base.entity';
import { BranchEntity } from './branch.entity';
import { ColorEntity } from './color.entity';

@Entity({ name: 'product' })
export class ProductEntity extends BaseEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ nullable: false })
  name: string;

  @ApiProperty()
  @Column({ name: 'branch_id', nullable: false })
  branchId: number;

  @ApiProperty()
  @JoinColumn({ name: 'branch_id' })
  @ManyToOne(() => BranchEntity, (branch) => branch.products, {
    cascade: true,
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  branch: BranchEntity;

  @ApiProperty()
  @Column({ name: 'color_id', nullable: false })
  colorId: number;

  @ApiProperty()
  @JoinColumn({ name: 'color_id' })
  @ManyToOne(() => ColorEntity, (color) => color.products, {
    cascade: true,
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  color: ColorEntity;
}
