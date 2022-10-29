import { Column, Entity } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { IsString, IsNumber, IsEnum } from 'class-validator';
import { TRIP_STATUS } from '../enum';

@Entity({ name: 'trip' })
export class Trip extends BaseEntity {
    @IsString()
    @Column()
    name!: string;

    @IsString()
    @Column()
    destination!: string;

    @IsNumber()
    @Column()
    distance!: number;

    @IsNumber()
    @Column()
    price!: number;

    @IsString()
    @Column({ name: "pickup_location" })
    pickupLocation!: string;

    @IsEnum(TRIP_STATUS)
    @Column()
    status!: TRIP_STATUS;
}

export default Trip;
