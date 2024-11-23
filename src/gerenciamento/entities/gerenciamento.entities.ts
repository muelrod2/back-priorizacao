import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class gerenciamento_priorizacao{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    status: number;

    @Column()
    
    codigo_solicitacao: string;

    @Column()
    area: string;

    @Column()
    modulos_fiscais: number;

    @Column()
    municipio: string;

    @Column()
    viveiro: string;

    @Column()
    ordem: number;

    @Column()
    prioridade: string;

    @Column()
    nota: string;

    @Column()
    programa: string;

    @Column({ type: 'timestamp', nullable: true })
    criacao: Date;
  
    @Column({ type: 'timestamp', nullable: true })
    atualizacao: Date;

}
