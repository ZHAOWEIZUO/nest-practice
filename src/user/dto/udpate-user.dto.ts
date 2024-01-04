import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

/*
 * @Author: zwz
 * @Date: 2023-12-21 10:19:11
 * @LastEditors: zwz
 * @LastEditTime: 2023-12-27 15:09:13
 * @Description: 请填写简介
 */
export class UpdateUserDto {
  @ApiProperty()
  headPic: string;

  @ApiProperty()
  nickName: string;

  @IsNotEmpty({
    message: '邮箱不能为空',
  })
  @IsEmail(
    {},
    {
      message: '不是合法邮箱格式',
    },
  )
  @ApiProperty()
  email: string;

  @IsNotEmpty({
    message: '验证码不能为空',
  })
  @ApiProperty()
  captcha: string;
}
