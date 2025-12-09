declare module '@apiverve/ulidgenerator' {
  export interface ulidgeneratorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface ulidgeneratorResponse {
    status: string;
    error: string | null;
    data: ULIDGeneratorData;
    code?: number;
  }


  interface ULIDGeneratorData {
      ulids:           string[];
      count:           number;
      timestamp:       number;
      format:          string;
      sortable:        boolean;
      caseInsensitive: boolean;
  }

  export default class ulidgeneratorWrapper {
    constructor(options: ulidgeneratorOptions);

    execute(callback: (error: any, data: ulidgeneratorResponse | null) => void): Promise<ulidgeneratorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: ulidgeneratorResponse | null) => void): Promise<ulidgeneratorResponse>;
    execute(query?: Record<string, any>): Promise<ulidgeneratorResponse>;
  }
}
