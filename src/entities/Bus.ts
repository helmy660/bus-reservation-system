import { Column, Entity } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { IsString, IsNumber, IsEnum } from 'class-validator';
import { BUS_STATUS } from '../enum';

@Entity({ name: 'bus' })
export class Bus extends BaseEntity {
    @IsString()
    @Column({ name: "plate_num" })
    plateNumber!: string;

    @IsNumber()
    @Column({ name: "num_of_seats" })
    NumOfSeats!: number;

    @IsEnum(BUS_STATUS)
    @Column()
    status!: BUS_STATUS;
}

export default Bus;
