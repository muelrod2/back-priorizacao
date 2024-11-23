import { IsNumber, IsOptional, IsString, IsDate } from "class-validator";

export class UpdateGerenciamentoDto{

    @IsNumber()
    @IsOptional()
    status?: number;

    @IsString()
    @IsOptional()
    codigo_solicitacao?: string;

    @IsNumber()
    @IsOptional()
    area?: string;

    @IsNumber()
    @IsOptional()
    modulos_fiscais?: number;

    @IsString()
    @IsOptional()
    municipio?: string;

    @IsString()
    @IsOptional()
    viveiro?: string;

    @IsNumber()
    @IsOptional()
    ordem?: number;

    @IsString()
    @IsOptional()
    prioridade?: string;

    @IsString()
    @IsOptional()
    nota?: string;

    @IsString()
    @IsOptional()
    programa?: string;

    @IsDate()
    @IsOptional()
    atualizacao?: Date;

}