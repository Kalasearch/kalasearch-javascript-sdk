import KalaAxiosWrapper from './kala-axios-wrapper';
import * as Types from './types';

class Index extends KalaAxiosWrapper implements Types.IndexInterface {

  constructor(config: Types.Config, indexId: string) {
    super(config);
  }

  async search(query: string, indexId: string): Promise<Types.SearchResponse> {
    const url = `/indexes/${indexId}/docs/search`;
    const params: Types.SearchRequest = {
      query,
      indexId
    };
    return await this.post(
      url, 
      params
    );
  }

  async getIndex(indexId: string): Promise<Types.IndexResponse> {
    const url = `/indexes/${indexId}`;
    return await this.get(url);
  }

  async getIndexList(): Promise<Types.IndexResponse[]> {
    const url = `/indexes`;
    return await this.get(url);
  }

  async createIndex(indexName: string): Promise<Types.IndexResponse> {
    const url = `/indexes`;
    const params = {
      indexName
    }
    return await this.post(url, params)
  }

  // async updateIndex(indexId: string, indexDetail: Types.IndexResponse): Promise<Types.IndexResponse> {
  //   const url = `/indexes/${indexId}`;
  //   const params = JSON.stringify(indexDetail);
  //   return await this.put(url, JSON.stringify(indexDetail))
  // }
}

export { Index };
