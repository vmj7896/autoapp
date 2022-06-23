import { AuthService } from './auth/auth.service';
export declare class AppController {
    private authService;
    getHello(): any;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
    }>;
    getUserInfo(req: any): any;
}
