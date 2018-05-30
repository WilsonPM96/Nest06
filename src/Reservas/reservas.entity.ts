import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UsuarioEntity } from '../Usuario/usuario.entity';

@Entity('Reservas')
export class ReservasEntity {
  @PrimaryGeneratedColumn()
  id_reserva: number;
  @Column({length: 10})
  fecha_ini: string;
  @Column({length: 10})
  fecha_fin: string;
  @ManyToOne(type => UsuarioEntity, usuarioEntity => usuarioEntity.reserva)
  usuario: UsuarioEntity;
}