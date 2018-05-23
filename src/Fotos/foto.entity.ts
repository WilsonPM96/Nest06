import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UsuarioEntity } from '../Usuario/usuario.entity';

@Entity('web_ramos_foto')
export class FotoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  url: string;

  @ManyToOne(type => UsuarioEntity, usuarioEntity => usuarioEntity.fotos)
  usuario: UsuarioEntity;
}