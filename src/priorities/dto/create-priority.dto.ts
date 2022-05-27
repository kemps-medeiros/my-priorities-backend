import { IsNotEmpty } from "class-validator";


export class CreatePriorityDto {
    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    prioritie_level: number

    @IsNotEmpty()
    user_id : string

}
