import { Type } from "class-transformer";
import { ArrayMaxSize, ArrayMinSize, IsArray, IsNotEmpty, IsNumber, Max, Min, ValidateNested } from "class-validator";

export class GetArrayDTO{
    @IsNotEmpty()
    @IsArray()
    @ArrayMinSize(2)
    @ArrayMaxSize(105)
    @Type(() => Number)
    @Max(104,{each: true})
    @Min(0,{each: true})
    height : number[]
}