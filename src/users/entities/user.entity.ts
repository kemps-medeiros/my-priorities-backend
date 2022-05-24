import { hashSync } from "bcrypt";
import { BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ name: "first_name" })
    firstName: string

    @Column({ name: "last_name" })
    lastName: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @CreateDateColumn({ name: "created_at" })
    createdAt: string

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: string

    @DeleteDateColumn({ name: "deleted_at" })
    deletedAt: string

    @BeforeInsert()
    hashPassword() {
        this.password = hashSync(this.password, 10)
    }

}
