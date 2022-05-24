import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        //como padrao, o passport usa o campo "username" no body da requisição para fazer o login
        // como quis usar o email, tive que adicionar dentro de "super" um objeto para fazer essa alteracao
        // e assim o campo capturado no body será o "email" e o "password"
        super({ usernameField: 'email' })
    }

    async validate(email: string, password: string) : Promise<any> {
        const user = await this.authService.validateUser(email, password);
        if (!user) {
            throw new UnauthorizedException();
        }

        return user
    }


}