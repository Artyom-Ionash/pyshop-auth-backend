import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(email: string) {
    return `This action returns a #${id} user`;
  }

  update(email: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(email: string) {
    return `This action removes a #${id} user`;
  }
}
