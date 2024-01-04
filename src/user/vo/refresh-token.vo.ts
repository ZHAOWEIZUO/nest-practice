/*
 * @Author: zwz
 * @Date: 2023-12-27 14:35:12
 * @LastEditors: zwz
 * @LastEditTime: 2023-12-27 14:36:25
 * @Description: 请填写简介
 */
import { ApiProperty } from '@nestjs/swagger';

export class RefreshTokenVo {
  @ApiProperty()
  access_token: string;

  @ApiProperty()
  refresh_token: string;
}
