import { Injectable } from '@nestjs/common';
import { UserService } from 'src/shared/user.service';
import { sign } from 'jsonwebtoken';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async signPayload(payload: any){
        return sign(payload, jwtConstants.secret, {expiresIn: '12h'});
    }

    async validateUser(payload: any){
        return await this.userService.findByPayload(payload);
    }
}
