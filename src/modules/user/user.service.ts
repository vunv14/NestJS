import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll() {
    return this.userRepository.find();
  }

  create(user: Partial<User>) {
    const userData = this.userRepository.create(user);
    if (!userData) {
      throw new HttpException('Thêm thất bại', HttpStatus.NO_CONTENT);
    }
    return this.userRepository.save(userData);
  }

  async update(id: number, user: Partial<User>) {
    await this.userRepository.update(id, user);
    return this.userRepository.findOneBy({ id });
  }

  async delete(id: number) {
    const userDataRemove = await this.userRepository.findOneBy({ id });
    if (userDataRemove == null) {
      throw new NotFoundException('Không tìm thấy user này');
    }
    this.userRepository.delete({ id });
    return userDataRemove;
  }
}
