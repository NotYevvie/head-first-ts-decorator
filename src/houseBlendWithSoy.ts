import Beverage from './beverage';

export default class HouseBlendWithSoy extends Beverage {
  description = 'House Blend Coffee With Soy';

  cost(): number {
    return 1.04;
  }
}
