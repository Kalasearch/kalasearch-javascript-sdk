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
    return await this.post(url, 
      params
    );
  }
}

export { Index };
