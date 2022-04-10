import {IsOptional, IsNotEmpty} from 'class-validator';

export class TodoCreateDto {
    @IsNotEmpty()
    title: string;

    @IsOptional()
    description: string;

    @IsOptional()
    finished_status: boolean;
}