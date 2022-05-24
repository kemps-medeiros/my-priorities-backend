import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(

        private usersService: UsersService,
        private jwtService: JwtService

    ) { }

    async validateUser(email: string, password: string): Promise<any> {

        const user = await this.usersService.findByEmail(email);

        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }

        return null

    }

    async login(user: any) {
        const payload = { username: user.firstName, sub: user.id }
        return {
            access_token: this.jwtService.sign(payload)
        };
    }
}


