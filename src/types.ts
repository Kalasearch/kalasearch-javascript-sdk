import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import { Index } from './index'
import KalaAxiosWrapper from './kala-axios-wrapper'
import KalaSearch from './kalasearch'
import KalaSearchApiError from './kalasearch-error'
export { Index }
export { KalaSearchApiError }

export interface Config {
  appId: string;
  apiKey: string;
  baseUrl?: string;
}

export interface SearchRequest {
  query: string;
  hitsPerPage?: number;
  searchableFields?: string[];
  highlightFields?: string[];
}

export interface SearchParams {
  hitsPerPage?: number;
  searchableFields?: string[];
  highlightFields?: string[];
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
  id: string;
  indexName: string;
  highlightFields: string[];
  searchableFields: string[];
  appId: string;
  rankers: object[];
  createdAt: any;
  updatedAt: any;
  numericFields: object[];
}

export interface IndexListResponse {
  indexes: object[];
}

export type DocObject = { 
  [Key in string]?: any 
}

export interface DocObjectResponse {
  processedAt: string;
  id: string;
  operation: string;
}

export interface KalaSearchInterface extends KalaAxiosWrapper {
  config: Config;
  getIndex: (
    id: string
  ) => Index;
  getIndexList(): Promise<IndexListResponse[]>;
  createIndex(
    indexName: string
  ): Promise<IndexResponse>;
}

export interface IndexInterface extends KalaAxiosWrapperInterface {
  search(
    query: string,
    options?: SearchParams
  ): Promise<SearchResponse>;
  updateIndex(
    indexDetail: IndexResponse,
  ): Promise<IndexResponse>;
  createObject(
    docObject: DocObject,
  ): Promise<DocObjectResponse>;
  updateObject(
    docObject: DocObject,
    objectId: string,
  ): Promise<DocObjectResponse>;
  deleteObject(
    objectId: string,
  ): Promise<DocObjectResponse>;
}

export interface KalaAxiosWrapperInterface {
  instance: AxiosInstance;
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
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R>;

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R>;
}

/*
 ** ERROR HANDLER
 */

export interface KalaSearchApiErrorInterface extends Error {
  name: string
  message: string
}

export interface KalaSearchApiErrorResponse {
  status?: number
  statusText?: string
  path?: string
  method?: string
  body?: object
}

export interface KalaSearchApiErrorRequest {
  url?: string
  path?: string
  method?: string
}

export type KalaSearchApiErrorConstructor = new (
  error: AxiosError
) => void

export default KalaSearch
