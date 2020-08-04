'use strict'

import { Index } from './index'
import KalaAxiosWrapper from './kala-axios-wrapper'
import * as Types from './types'

class Kalasearch extends KalaAxiosWrapper
  implements Types.KalaSearchInterface {
    config: Types.Config
    constructor(config: Types.Config) {
      super(config)
      this.config = config
    }

    getIndex(
        id: string
      ): Index {
      return new Index(this.config, id)
    }
  
    async getIndexList(): Promise<Types.IndexListResponse[]> {
      const url = `/v1/indexes`
      return await this.get(url)
    }
  
    async createIndex(
        indexName: string
      ): Promise<Types.IndexResponse> {
      const url = `/v1/indexes`
      return await this.post(url, { indexName })
    }
  }

export default Kalasearch
