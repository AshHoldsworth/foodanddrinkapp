export interface IConsumable {
  id: string;
  name: string;
  rating: number;
  isHealthyOption: boolean;
  difficulty: number;
  cost: number;
  speed: number;
  ingredients: [];
  type: string;
}
