import { AxiosError } from 'axios'
import * as Types from './types'

const KalaSearchApiError: Types.KalaSearchApiErrorConstructor = class
  extends Error
  implements Types.KalaSearchApiErrorInterface {
    response?: Types.KalaSearchApiErrorResponse
    request?: Types.KalaSearchApiErrorRequest
    type: string

    constructor(error: AxiosError) {
      super(error.message)
      this.type = this.constructor.name
      this.name = 'KalaSearchApiError'

      if (error.response !== undefined) {
        this.response = {
          status: error.response.status,
          statusText: error.response.statusText,
          path: error.response.config.url,
          method: error.response.config.method,
          body: error.response.data,
        }
        if(error.response.data?.message !== undefined) {
          this.message = error.response.data.message
        }
      } else {
        this.request = {
          url: error.request._currentUrl,
          path: error.config.url,
          method: error.config.method,
        }
      }
    }
  }

export default KalaSearchApiError