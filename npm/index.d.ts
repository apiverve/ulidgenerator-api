declare module '@apiverve/ulidgenerator' {
  export interface ulidgeneratorOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface ulidgeneratorResponse {
    status: string;
    error: string | null;
    data: ULIDGeneratorData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface ULIDGeneratorData {
      ulids:           (null | string)[];
      count:           number | null;
      timestamp:       number | null;
      format:          null | string;
      sortable:        boolean | null;
      caseInsensitive: boolean | null;
  }

  export default class ulidgeneratorWrapper {
    constructor(options: ulidgeneratorOptions);

    execute(callback: (error: any, data: ulidgeneratorResponse | null) => void): Promise<ulidgeneratorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: ulidgeneratorResponse | null) => void): Promise<ulidgeneratorResponse>;
    execute(query?: Record<string, any>): Promise<ulidgeneratorResponse>;
  }
}
