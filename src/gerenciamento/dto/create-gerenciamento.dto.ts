import {IsNumber, IsNotEmpty, IsString,IsDate,IsOptional } from 'class-validator';

export class CreateGerenciamentoDto{

    @IsNumber()
    @IsNotEmpty()
    status:number;

    @IsString()
    @IsNotEmpty()
    codigo_solicitacao:string;

    @IsNumber()
    @IsNotEmpty()
    area: string;

    @IsNumber()
    @IsNotEmpty()
    modulos_fiscais: number;

    @IsString()
    @IsNotEmpty()
    municipio: string;

    @IsString()
    @IsNotEmpty()
    viveiro: string;

    @IsNumber()
    @IsNotEmpty()
    ordem: number;

    @IsString()
    @IsNotEmpty()
    prioridade: string;

    @IsString()
    @IsNotEmpty()
    nota: string;

    @IsString()
    @IsNotEmpty()
    programa: string;

    @IsDate()
    @IsOptional()
    criacao: Date;

}