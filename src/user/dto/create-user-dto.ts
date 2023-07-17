/* eslint-disable prettier/prettier */
import { IsString, IsEmail} from "class-validator";


export class CreateUserDTO {

    @IsString()
    name: string;

    @IsString()
    email: string;

    @IsString()
    endereco: string;

    @IsString()
    telefone: string;

    @IsEmail()
    modelo_celular: string;


}