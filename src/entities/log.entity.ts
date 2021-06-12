import { IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { BaseEntity } from './base.entity';

export enum Severity {
  Error = 'error',
  Info = 'info',
}

@Entity({ name: 'log' })
export class LogEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: Severity.Info, enum: Severity, type: 'enum' })
  severity: string;

  @Column()
  channel: string;

  @IsString()
  @IsNotEmpty()
  @Column()
  content: string;
}
