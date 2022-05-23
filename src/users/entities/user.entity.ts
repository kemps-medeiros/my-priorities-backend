import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({name: "first_name"})
    firstName: string

    @Column({name: "last_name"})
    lastName: string

    @Column({unique: true})
    email: string

    @Column()
    password: string

    @CreateDateColumn({name: "created_at"})
    createdAt: string

    @CreateDateColumn({name: "updated_at"})
    updatedAt: string

    @CreateDateColumn({name: "deleted_at"})
    deletedAt: string

}
