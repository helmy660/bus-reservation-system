import {
    ArrayNotEmpty,
    IsArray,
    IsEmail,
    IsNotEmpty,
    IsString,
} from 'class-validator';
  
class ReservationDTO {
    @IsNotEmpty({ message: 'Trip id is required' })
    @IsString()
    trip!: number;

    @IsArray()
    @ArrayNotEmpty({ message: 'Please pick your seats' })
    @IsString()
    @IsEmail()
    seats!: string[];
}

export default ReservationDTO;
