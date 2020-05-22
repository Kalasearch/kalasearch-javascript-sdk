import {
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'

export interface Config {
  host: string;
  appId: string;
  apiKey: string;
}

export interface SearchParams {
  searchableFields?: string[];
}

export interface SearchRequest {
  query: string;
  indexId: string;
  options?: SearchParams;
}

export interface SearchResponse {
  totalHits: number;
  hits: object[];
  queryTimeUsed: number;
}

export interface CreateIndexRequest {
  indexName: string;
}

export interface IndexRequest {
  indexId: string;
}

export interface IndexResponse {
  indexId: string;
  indexName: string;
  highlightFields: object[];
  searchableFields: object[];
  appId: string;
  rankers: object[];
  createdAt: any;
  updatedAt: any;
  numericFields: object[];
}

export interface IndexInterface extends KalaAxiosWrapperInterface {
  search(
    query: string,
    indexId: string,
    options?: SearchParams
  ): Promise<SearchResponse>;
  getIndex(
    indexId: string,
  ): Promise<IndexResponse>;
  getIndexList(): Promise<IndexResponse[]>;
  createIndex(
    indexName: string
  ): Promise<IndexResponse>;
  // updateIndex(
  //   indexId: string,
  //   indexDetail: IndexResponse
  // ): Promise<IndexResponse>;
}

export interface KalaAxiosWrapperInterface {
  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R>;

  post<T = any, R = AxiosResponse<any>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R>;

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R>;
}
