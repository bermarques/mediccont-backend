import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  @IsNotEmpty()
  name: string;

  @Column({ nullable: false })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column({ nullable: false })
  @IsNotEmpty()
  password: string;

  @Column({ name: 'two_factor_code', nullable: true })
  twoFactorCode: string;

  @Column({
    name: 'two_factor_code_expires_at',
    type: 'timestamp',
    nullable: true,
  })
  twoFactorCodeExpiresAt: Date;
}
