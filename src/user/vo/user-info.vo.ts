/*
 * @Author: zwz
 * @Date: 2023-12-20 21:03:31
 * @LastEditors: zwz
 * @LastEditTime: 2023-12-27 14:52:18
 * @Description: 请填写简介
 */

import { ApiProperty } from '@nestjs/swagger';
export class UserDetailVo {
  @ApiProperty()
  id: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  nickName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  headPic: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  isFrozen: boolean;

  @ApiProperty()
  createTime: Date;
}
