'use strict'

import instance, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import KalaSearchApiError from './kalasearch-error'
import * as Types from './types'

class KalaAxiosWrapper implements Types.KalaAxiosWrapperInterface {
  instance: AxiosInstance

  constructor(config: Types.Config) {
    let KALA_BASE_URL;
    if (config.baseUrl !== undefined) {
      KALA_BASE_URL = config.baseUrl
    } else {
      KALA_BASE_URL = 'https://api.kalasearch.cn'
    }
    if (config.apiKey !== undefined && config.appId !== undefined) {
      this.instance = instance.create({
        baseURL: KALA_BASE_URL,
        headers: {
          'Content-Type': 'application/json',
          'X-Kalasearch-Id': config.appId,
          'X-Kalasearch-Key': config.apiKey,
        },
      })
    } else {
      this.instance = instance.create({
        baseURL: KALA_BASE_URL,
      })
    }
    this.instance.interceptors.response.use((response) => response.data)
    this.instance.interceptors.request.use((request) => {
      if (request.data !== undefined) {
        return {
          ...request,
          data: JSON.stringify(request.data),
        }
      }
      return request
    })
  }

  async get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    try {
      return await this.instance.get(url, config)
    } catch (e) {
      throw new KalaSearchApiError(e)
    }
  }

  async post(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<any> {
    try {
      return await this.instance.post(url, data, config)
    } catch (e) {
      throw new KalaSearchApiError(e)
    }
  }

  async put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R> {
    try {
      return await this.instance.put(url, data, config)
    } catch(e) {
      throw new KalaSearchApiError(e)
    }
  }

  async delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    try {
      return await this.instance.delete(url, config)
    } catch(e) {
      throw new KalaSearchApiError(e)
    }
  }
}

export default KalaAxiosWrapper
