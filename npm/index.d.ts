declare module '@apiverve/spellchecker' {
  export interface spellcheckerOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface spellcheckerResponse {
    status: string;
    error: string | null;
    data: SpellCheckerData;
    code?: number;
  }


  interface SpellCheckerData {
      spellPass:        boolean;
      mispellingsFound: number;
      corrections:      Correction[];
  }
  
  interface Correction {
      word:        string;
      suggestions: string[];
  }

  export default class spellcheckerWrapper {
    constructor(options: spellcheckerOptions);

    execute(callback: (error: any, data: spellcheckerResponse | null) => void): Promise<spellcheckerResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: spellcheckerResponse | null) => void): Promise<spellcheckerResponse>;
    execute(query?: Record<string, any>): Promise<spellcheckerResponse>;
  }
}
