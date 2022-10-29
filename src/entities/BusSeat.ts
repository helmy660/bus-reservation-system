import { IsString } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import Bus from './bus';

@Entity({ name: 'bus_seat' })
export class BusSeat extends BaseEntity {
    @ManyToOne(() => Bus, { eager: true, nullable: true })
    @JoinColumn({ name: 'bus_id' })
    bus!: Bus;

    @IsString()
    @Column({ name: 'seat_id' })
    seatId!: string;
}

export default BusSeat;
