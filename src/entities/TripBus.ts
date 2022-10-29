import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import Trip from './trip';
import Bus from './bus';

@Entity({ name: 'trip_bus' })
export class TripBus extends BaseEntity {
    @ManyToOne(() => Trip, { eager: true, nullable: true })
    @JoinColumn({ name: 'trip_id' })
    trip!: Trip;

    @ManyToOne(() => Bus, { eager: true, nullable: true })
    @JoinColumn({ name: 'bus_id' })
    bus!: Bus;
}

export default TripBus;
