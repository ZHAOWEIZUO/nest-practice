/*
 * @Author: zwz
 * @Date: 2023-12-19 21:06:35
 * @LastEditors: zwz
 * @LastEditTime: 2023-12-19 21:12:20
 * @Description: 请填写简介
 */
import { Global, Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';

@Global()
@Module({
  controllers: [EmailController],
  providers: [EmailService],
  exports: [EmailService],
})
export class EmailModule {}
