declare module '@apiverve/spellchecker' {
  export interface spellcheckerOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface spellcheckerResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class spellcheckerWrapper {
    constructor(options: spellcheckerOptions);

    execute(callback: (error: any, data: spellcheckerResponse | null) => void): Promise<spellcheckerResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: spellcheckerResponse | null) => void): Promise<spellcheckerResponse>;
    execute(query?: Record<string, any>): Promise<spellcheckerResponse>;
  }
}
