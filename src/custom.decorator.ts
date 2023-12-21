/*
 * @Author: zwz
 * @Date: 2023-12-20 15:33:28
 * @LastEditors: zwz
 * @LastEditTime: 2023-12-21 10:57:49
 * @Description: 自定义装饰器
 */

import {
  ExecutionContext,
  SetMetadata,
  createParamDecorator,
} from '@nestjs/common';
import { Request } from 'express';

export const RequireLogin = () => SetMetadata('require-login', true);

export const RequirePermission = (...permissions: string[]) =>
  SetMetadata('require-permission', permissions);

// 自定义参数装饰器， 传入属性名，如果没有找到直接返回整个参数
export const UserInfo = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();

    if (!request.user) {
      return null;
    }
    return data ? request.user[data] : request.user;
  },
);
