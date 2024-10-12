import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class Todo{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    task: string

    @Column({default:false})
    isCompleted :boolean
}