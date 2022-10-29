import { BeforeInsert, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { IsNumber } from 'class-validator';

export abstract class BaseEntity {
  @IsNumber()
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;

  /**
   * CreateDateColumn decorator not working
   */
  @BeforeInsert()
  setCreatedAt(): void {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
