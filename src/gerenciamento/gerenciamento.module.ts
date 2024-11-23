import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GerenciamentoController } from './gerenciamento.controller';
import { gerenciamento_priorizacao } from './entities/gerenciamento.entities';
import { GerenciamentoService } from './gerenciamentoservice';


@Module({
  imports: [TypeOrmModule.forFeature([gerenciamento_priorizacao])],
  controllers: [GerenciamentoController],
  providers: [GerenciamentoService],
})
export class GerenciamentoModule {}
