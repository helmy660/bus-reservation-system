import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { IsString, IsEmail, IsEnum } from 'class-validator';
import { USER_ROLE } from '../enum';
import Reservation from './Reservation';

@Entity({ name: 'user_account' })
export class User extends BaseEntity {
    @IsString()
    @Column()
    name!: string;

    @IsEmail()
    @Column()
    email!: string;

    @IsString()
    @Column()
    password!: string;

    @IsEnum(USER_ROLE)
    @Column()
    role!: USER_ROLE;

    @OneToMany(() => Reservation, (reservation) => reservation.user)
    reservations!: Reservation[]
}

export default User;
