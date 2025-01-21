import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { IsNotEmpty, IsObject } from 'class-validator';

@Entity()
export class Declaration {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  @IsNotEmpty()
  year: string;

  @Column({ nullable: false, default: false })
  @IsNotEmpty()
  submitted: boolean;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    name: 'created_date',
  })
  createdDate: Date;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ type: 'jsonb', nullable: false })
  @IsNotEmpty()
  @IsObject()
  declarationData: object;
}
