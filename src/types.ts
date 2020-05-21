import { AxiosRequestConfig, AxiosResponse } from 'axios';

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

export interface IndexInterface extends KalaAxiosWrapperInterface {
  search(query: string, indexId: string, options?: SearchParams): Promise<SearchResponse>;
}

export interface KalaAxiosWrapperInterface {
  post<T = any, R = AxiosResponse<any>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R>;
}
