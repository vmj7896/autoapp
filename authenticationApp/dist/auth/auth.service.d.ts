import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private usersService;
    private jwtTokenService;
    constructor(usersService: UsersService, jwtTokenService: JwtService);
    validateUserCredentials(username: string, password: string): Promise<any>;
    loginWithCredentials(user: any): Promise<{
        access_token: string;
    }>;
}
