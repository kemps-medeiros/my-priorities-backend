import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(

        private usersService: UsersService,
        private jwtService: JwtService

    ) { }

    async validateUser(email: string, password: string): Promise<any> {


        try {
            const user = await this.usersService.findByEmail(email);
            if (user) {
                const isPasswordValid = compareSync(password, user.password);
                if (!isPasswordValid) {
                    return null
                }

                return user
            }

        } catch (error) {
            return null
        }

    }

    async login(user: any) {
        const payload = { username: user.firstName, sub: user.id }
        return {
            access_token: this.jwtService.sign(payload)
        };
    }
}


