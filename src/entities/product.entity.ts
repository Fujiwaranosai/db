import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { BaseEntity } from './base.entity';
import { BranchEntity } from './branch.entity';
import { ColorEntity } from './color.entity';

@Entity({ name: 'product' })
export class ProductEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  branchId: number;

  @JoinColumn({ name: 'branchId' })
  @ManyToOne((type) => BranchEntity, (branch) => branch.products, {
    cascade: true,
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  branch: BranchEntity;

  @Column({ nullable: false })
  colorId: number;

  @JoinColumn({ name: 'colorId' })
  @ManyToOne((type) => ColorEntity, (color) => color.products, {
    cascade: true,
    nullable: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  color: ColorEntity;
}
