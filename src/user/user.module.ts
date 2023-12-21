/*
 * @Author: zwz
 * @Date: 2023-12-19 20:51:06
 * @LastEditors: zwz
 * @LastEditTime: 2023-12-19 21:28:27
 * @Description: 请填写简介
 */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';
import { Permission } from './entities/permission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role, Permission])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
