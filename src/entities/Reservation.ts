import { IsEnum, IsNumber } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import Trip from './trip';
import User from './user';
import { RESERVATION_STATUS } from '../enum';

@Entity({ name: 'reservation' })
export class Reservation extends BaseEntity {
    @ManyToOne(() => User, { eager: true, nullable: true })
    @JoinColumn({ name: 'user_id' })
    user!: User;

    @ManyToOne(() => Trip, { eager: true, nullable: true })
    @JoinColumn({ name: 'trip_id' })
    trip!: Trip;

    @IsNumber()
    @Column({ name: "num_of_seats" })
    NumOfSeats!: number;

    @IsNumber()
    @Column({ name: "base_price" })
    basePrice!: number;

    @IsNumber()
    @Column()
    discount!: number;

    @IsNumber()
    @Column({ name: "final_price" })
    final_price!: number;

    @IsEnum(RESERVATION_STATUS)
    @Column()
    status!: RESERVATION_STATUS;
}

export default Reservation;
