import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export type User = {
  userId: number;
  name: string;
  email: string;
  role: string;
  password: string;
};
export const users: User[] = [
  {
    userId: 1,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    role: 'admin',
    password: 'hashed_password_1',
  },
  {
    userId: 2,
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    role: 'user',
    password: 'hashed_password_2',
  },
  {
    userId: 3,
    name: 'Carol Williams',
    email: 'carol.williams@example.com',
    role: 'moderator',
    password: 'hashed_password_3',
  },
  {
    userId: 4,
    name: 'David Brown',
    email: 'david.brown@example.com',
    role: 'user',
    password: 'hashed_password_4',
  },
  {
    userId: 5,
    name: 'Eva Martinez',
    email: 'eva.martinez@example.com',
    role: 'editor',
    password: 'hashed_password_5',
  },
];
@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
  async findOneByEmail(email: string): Promise<User | undefined> {
    return users.find((user) => user.email === email);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
