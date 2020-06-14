'use strict'

import KalaAxiosWrapper from './kala-axios-wrapper'
import * as Types from './types'

class Index extends KalaAxiosWrapper implements Types.IndexInterface {
  indexId: string

  constructor(config: Types.Config, indexId: string) {
    super(config)
    this.indexId = indexId
  }

  async search(
      query: string,
      hitsPerPage: number,
      searchableFields: string[]
    ): Promise<Types.SearchResponse> {
    const url = `/indexes/${this.indexId}/docs/search`
    const params: Types.SearchRequest = {
      query,
      hitsPerPage,
      searchableFields
    }
    return await this.post(
      url, 
      params
    )
  }

  async updateIndex(
      indexDetail: Types.IndexResponse
    ): Promise<Types.IndexResponse> {
    const url = `/indexes/${this.indexId}`;
    return await this.put(url, indexDetail)
  }

  async addDocument(
    documents: Types.Document[]
    ): Promise<Types.DocumentResponse> {
    const url = `/indexes/${this.indexId}/docs`
    return await this.post(url, documents)
  }
}

export { Index }
