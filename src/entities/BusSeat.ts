import { IsNumber, IsString } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import Bus from './bus';

@Entity({ name: 'bus_seat' })
export class BusSeat extends BaseEntity {
    @IsNumber()
    @JoinColumn({ name: 'bus_id' })
    bus!: Bus;

    @IsString()
    @Column({ name: 'seat_id' })
    seatId!: string;
}

export default BusSeat;
