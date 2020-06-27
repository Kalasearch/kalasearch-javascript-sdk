'use strict'

import KalaAxiosWrapper from './kala-axios-wrapper'
import * as Types from './types'

class Index extends KalaAxiosWrapper implements Types.IndexInterface {
  id: string

  constructor(config: Types.Config, id: string) {
    super(config)
    this.id = id
  }

  async search(
      query: string,
      hitsPerPage: number,
      searchableFields: string[]
    ): Promise<Types.SearchResponse> {
    const url = `/indexes/${this.id}/query`
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
    const url = `/indexes/${this.id}`;
    return await this.put(url, indexDetail)
  }

  async addDocument(
    documents: Types.Document[]
    ): Promise<Types.DocumentResponse> {
    const url = `/indexes/${this.id}/docs`
    return await this.post(url, documents)
  }
}

export { Index }
