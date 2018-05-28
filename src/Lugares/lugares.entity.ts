import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Lugares')
export class LugaresEntity {
  @PrimaryGeneratedColumn()
  id_lugar: number;
  @Column({length: 50})
  tipo_lugar: string;
  @Column({length: 30})
  ubicacion_lugar: string;
  @Column({length: 3})
  horario_lugar: string;
}