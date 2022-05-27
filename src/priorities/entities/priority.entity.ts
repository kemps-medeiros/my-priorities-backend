import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Priority {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    description: string

    @Column()
    prioritie_level: number

    @Column()
    user_id : string

    @CreateDateColumn({ name: "created_at" })
    createdAt: string

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: string

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: string


}
