'use strict';

import instance, { AxiosInstance, AxiosRequestConfig } from 'axios';
import * as Types from './types';

class KalaAxiosWrapper implements Types.KalaAxiosWrapperInterface {
  instance: AxiosInstance;

  constructor(config: Types.Config) {
    if (config.apiKey !== undefined && config.appId !== undefined) {
      this.instance = instance.create({
        baseURL: config.host,
        headers: {
          'Content-Type': 'application/json',
          appId: config.appId,
          apiKey: config.apiKey,
        },
      });
    } else {
      this.instance = instance.create({
        baseURL: config.host,
      });
    }
    this.instance.interceptors.response.use((response) => response.data);
    this.instance.interceptors.request.use((request) => {
      if (request.data !== undefined) {
        return {
          ...request,
          data: JSON.stringify(request.data),
        };
      }
      return request;
    });
  }

  async post(url: string, data?: any, config?: AxiosRequestConfig): Promise<any> {
    try {
      return await this.instance.post(url, data, config);
    } catch (e) {
      throw new e();
    }
  }
}

export default KalaAxiosWrapper;
