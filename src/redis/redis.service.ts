/*
 * @Author: zwz
 * @Date: 2023-12-19 20:59:36
 * @LastEditors: zwz
 * @LastEditTime: 2023-12-19 21:00:25
 * @Description: 请填写简介
 */
import { Inject, Injectable } from '@nestjs/common';
import { RedisClientType } from 'redis';

@Injectable()
export class RedisService {
  @Inject('REDIS_CLIENT')
  private redisClient: RedisClientType;

  async get(key: string) {
    return await this.redisClient.get(key);
  }

  async set(key: string, value: string | number, ttl?: number) {
    await this.redisClient.set(key, value);

    if (ttl) {
      await this.redisClient.expire(key, ttl);
    }
  }
}
