import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ReservasEntity } from '../Reservas/reservas.entity';
import { type } from 'os';
import { LugaresEntity } from '../Lugares/lugares.entity';

@Entity('Reservas')
export class DetallereservaEntity {
  @PrimaryGeneratedColumn()
  id_detalle_reserva: string;
  @Column({ length: 30 })
  estado: string;
  @Column({ length: 30 })
  fecha: string;
  @Column({length: 30})
  hora: string;
  @ManyToOne(type => ReservasEntity)
  @JoinColumn()
  Reservas: ReservasEntity[];
  @ManyToOne(type1 => LugaresEntity)
  @JoinColumn()
  Lugares: LugaresEntity[];

}