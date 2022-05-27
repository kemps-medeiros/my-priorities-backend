import { IsNotEmpty } from "class-validator";


export class UpdatePriorityDto {
    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    prioritie_level: number

}

