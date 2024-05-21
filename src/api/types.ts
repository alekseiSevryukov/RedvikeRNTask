export interface IPokemon {
  name: string;
  url: string;
}

export interface PokemonsListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemon[];
}

export interface IStat {
  base_stat: number;
  effort: number;
  stat: {name: string; url: string};
}

export interface IType {
  slot: number;
  type: {name: string; url: string};
}

export interface IPokemonResponse {
  name: string;
  height: string;
  base_experience: string;
  id: string;
  weight: string;
  stats: IStat[];
  types: IType[];
  url?: string;
}
