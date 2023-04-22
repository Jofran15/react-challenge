import { NationalityModel } from "./nationalityModel";

export interface NationalityState {
  nationalities: NationalityModel[];
  selected: string;
  isLoading: boolean;
}
