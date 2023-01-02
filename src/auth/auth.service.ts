import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string) {
    const user = await this.usersService.findOneByEmail(username);
    if (user && (await compare(pass, user.hash))) {
      const { hash, ...result } = user;
      return result;
    }
    return null;
  }

  async login({ id }) {
    const payload = { sub: id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
