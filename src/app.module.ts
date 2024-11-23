import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GerenciamentoController } from './gerenciamento/gerenciamento.controller';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { gerenciamento_priorizacao } from './gerenciamento/entities/gerenciamento.entities';
import { GerenciamentoModule } from './gerenciamento/gerenciamento.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',      
      port: 5432,             
      username: 'postgres', 
      password: 'postgres',  
      database: 'postgres', 
      entities: [gerenciamento_priorizacao], 
      synchronize: true,      
      logging: true, 
    }),
    GerenciamentoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
