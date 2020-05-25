import KalaAxiosWrapper from './kala-axios-wrapper';
import * as Types from './types';

class Index extends KalaAxiosWrapper implements Types.IndexInterface {

  constructor(config: Types.Config) {
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
    return await this.post(url, { indexName })
  }

  async updateIndex(indexId: string, indexDetail: Types.IndexResponse): Promise<Types.IndexResponse> {
    const url = `/indexes/${indexId}`;
    return await this.put(url, indexDetail)
  }

  async addDocument(indexId: string, documents: Types.Document[]): Promise<Types.DocumentResponse> {
    const url = `/indexes/${indexId}/docs`
    return await this.post(url, documents)
  }
}

export { Index as KalaSearch };
