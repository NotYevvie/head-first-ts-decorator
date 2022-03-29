import Beverage from './beverage';

export default class HouseBlend extends Beverage {
  description = 'House Blend Coffee';

  cost(): number {
    return 0.89;
  }
}
