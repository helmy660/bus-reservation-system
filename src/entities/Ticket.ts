import { IsEnum } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import Trip from './trip';
import { TICKET_STATUS } from '../enum';
import Reservation from './Reservation';
import BusSeat from './BusSeat';

@Entity({ name: 'ticket' })
export class Ticket extends BaseEntity {
    @ManyToOne(() => Reservation, { eager: true, nullable: true })
    @JoinColumn({ name: 'reservation_id' })
    reservation!: Reservation;

    @ManyToOne(() => Trip, { eager: true, nullable: true })
    @JoinColumn({ name: 'trip_id' })
    trip!: Trip;

    @ManyToOne(() => BusSeat, { eager: true, nullable: true })
    @JoinColumn({ name: 'bus_seat_id' })
    BusSeat!: BusSeat;

    @IsEnum(TICKET_STATUS)
    @Column()
    status!: TICKET_STATUS;
}

export default Ticket;
