/*
 * @Author: zwz
 * @Date: 2023-12-19 20:52:50
 * @LastEditors: zwz
 * @LastEditTime: 2023-12-19 20:52:51
 * @Description: 请填写简介
 */
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'permissions',
})
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 20,
    comment: '权限代码',
  })
  code: string;

  @Column({
    length: 100,
    comment: '权限描述',
  })
  description: string;
}
