'use strict'

import KalaAxiosWrapper from './kala-axios-wrapper'
import * as Types from './types'

class Index extends KalaAxiosWrapper implements Types.IndexInterface {
  id: string

  constructor(config: Types.Config, id: string) {
    super(config)
    this.id = id
  }
  
  /**
   * Search for objects from an index
   * @memberof Index
   * @method search
   */
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

  /**
   * Update an index
   * @memberof Index
   * @method updateIndex
   */
  async updateIndex(
    indexDetail: Types.IndexResponse
  ): Promise<Types.IndexResponse> {
    const url = `/v1/indexes/${this.id}`;
    return await this.put(url, indexDetail)
  }

  /**
   * Create an object to an index
   * @memberof Index
   * @method createObject
   */
  async createObject(
    docObject: Types.DocObject,
  ): Promise<Types.ObjectOperationResponse> {
    const url = `/v1/indexes/${this.id}/objects`
    return await this.post(url, docObject)
  }

  /**
   * Update an object to an index
   * @memberof Index
   * @method updateObject
   */
  async updateObject(
    objectId: string,
    docObject: Types.DocObject
  ): Promise<Types.ObjectOperationResponse> {
    const url = `/v1/indexes/${this.id}/objects/${objectId}`
    return await this.put(url, docObject)
  }

  /**
   * Delete one object from an index
   * @memberof Index
   * @method deleteObject
   */
  async deleteObject(
    objectId: string
  ): Promise<Types.ObjectOperationResponse> {
    const url = `/v1/indexes/${this.id}/objects/${objectId}`
    return await this.delete(url)
  }
}

export { Index }
