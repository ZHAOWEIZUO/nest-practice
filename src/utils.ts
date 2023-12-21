/*
 * @Author: zwz
 * @Date: 2023-12-19 20:57:32
 * @LastEditors: zwz
 * @LastEditTime: 2023-12-19 20:57:33
 * @Description: 请填写简介
 */
import { BadRequestException, ParseIntPipe } from '@nestjs/common';
import * as crypto from 'crypto';

export function md5(str) {
  const hash = crypto.createHash('md5');
  hash.update(str);
  return hash.digest('hex');
}

export function generateParseIntPipe(name) {
  return new ParseIntPipe({
    exceptionFactory() {
      throw new BadRequestException(name + ' 应该传数字');
    },
  });
}
