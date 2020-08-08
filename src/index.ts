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
      options?: Types.SearchParams
    ): Promise<Types.SearchResponse> {
    const url = `/v1/indexes/${this.id}/query`
    const params: Types.SearchRequest = {
      query,
    }
    if (options !== undefined) {
      if (options.hitsPerPage !== undefined) {
        params.hitsPerPage = options.hitsPerPage
      }
      if (options.searchableFields !== undefined) {
        params.searchableFields = options.searchableFields
      }
      if (options.highlightFields !== undefined) {
        params.highlightFields = options.highlightFields
      }
    }
    return await this.post(
      url, 
      params
    )
  }

  async updateIndex(
      indexDetail: Types.IndexResponse
    ): Promise<Types.IndexResponse> {
    const url = `/v1/indexes/${this.id}`;
    return await this.put(url, indexDetail)
  }

  async createObject(
    docObject: Types.DocObject,
    ): Promise<Types.DocObjectResponse> {
    const url = `/v1/indexes/${this.id}/objects`
    return await this.post(url, docObject)
  }

  async editObject(
    docObject: Types.DocObject,
    objectId: Types.DocObjectRequest
    ): Promise<Types.DocObjectResponse> {
    const url = `/v1/indexes/${this.id}/objects/${objectId}`
    return await this.put(url, docObject)
  }

  async deleteObject(
    objectId: Types.DocObjectRequest
    ): Promise<Types.DocObjectResponse> {
    const url = `/v1/indexes/${this.id}/objects/${objectId}`
    return await this.delete(url)
  }
}

export { Index }
