import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) { }

  async create(createUserDto: CreateUserDto) {
    
    const emailAlreadyExist = await this.usersRepository.findOne({where: {email: createUserDto.email}})
    if (emailAlreadyExist) {
      throw new HttpException('Email User Already Exists', HttpStatus.BAD_REQUEST);
    } 
    const user = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(user);
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  async findOne(id: string) {
    return await this.usersRepository.findOne(id);
  }


  async findOneOrFail(
    conditions: FindConditions<User>,
    options?: FindOneOptions<User>) {
    try {
      return await this.usersRepository.findOneOrFail(conditions, options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findByEmail(email: string) {
    return await this.usersRepository.findOne({where: {email: email}})
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOneOrFail({ id });
    await this.usersRepository.merge(user, updateUserDto);
    return await this.usersRepository.save(user);
  }

  async remove(id: string) {
    return await this.usersRepository.delete(id);
  }
}
