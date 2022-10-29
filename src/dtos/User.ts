import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

class UserDTO {
    @IsOptional()
    @IsString()
    name!: string;

    @IsNotEmpty({ message: 'Email is required' })
    @IsString()
    @IsEmail()
    email!: string;

    @IsNotEmpty({ message: 'password is required' })
    @IsString()
    @MinLength(8)
    @MaxLength(20)
    password?: string;
}

export default UserDTO;
