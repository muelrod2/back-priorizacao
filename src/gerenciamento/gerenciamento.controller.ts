import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { GerenciamentoService } from './gerenciamentoservice';
import { CreateGerenciamentoDto } from './dto/create-gerenciamento.dto';
import { UpdateGerenciamentoDto } from './dto/update-gerenciamento.dto';

@Controller('gerenciamento')
export class GerenciamentoController {

    constructor(private readonly gerenciamentoservice: GerenciamentoService){}

    @Post()
    create(@Body() createGerenciamentoDto :CreateGerenciamentoDto){
        return this.gerenciamentoservice.create(createGerenciamentoDto)
    }

    @Get()
    findAll(){
        return this.gerenciamentoservice.findAll();
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateGerenciamentoDto: UpdateGerenciamentoDto,){
        return this.gerenciamentoservice.update(id, updateGerenciamentoDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number){
        return this.gerenciamentoservice.remove(id);
    }

}
