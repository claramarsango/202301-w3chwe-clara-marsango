export interface ComponentStructure {
  domElement: HTMLElement;
  render: () => void;
  addListeners?: () => void;
}

export interface Pokemon {
  id: number;
  name: string;
  baseExperience: number;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  sprites: {
    versions: {
      'generation-v': {
        'black-white': {
          animated: {
            front_default: string;
          };
        };
      };
    };
  };
}
