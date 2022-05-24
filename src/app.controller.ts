import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth/auth.service";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";
import { LocalAuthGuard } from "./auth/local-auth.guard";


@Controller()
export class AppController {
    constructor(private authService: AuthService) {

    }

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {

        return this.authService.login(req.user);
    }

    // examplo de rota protegida por autenticação com JWT
    // @UseGuards(JwtAuthGuard)
    // @Get('profile')
    // getProfile(@Request() req) {
    //     return req.user;
    // }


}