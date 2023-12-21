/*
 * @Author: zwz
 * @Date: 2023-12-19 21:46:36
 * @LastEditors: zwz
 * @LastEditTime: 2023-12-19 21:46:37
 * @Description: 请填写简介
 */
interface UserInfo {
  id: number;

  username: string;

  nickName: string;

  email: string;

  headPic: string;

  phoneNumber: string;

  isFrozen: boolean;

  isAdmin: boolean;

  createTime: number;

  roles: string[];

  permissions: string[];
}
export class LoginUserVo {
  userInfo: UserInfo;

  accessToken: string;

  refreshToken: string;
}
