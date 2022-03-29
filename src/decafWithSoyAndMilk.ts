import Beverage from './beverage';

export default class DecafWithSoyAndMilk extends Beverage {
  description = 'Decaf Coffee With Soy And Milk';

  cost(): number {
    return 1.35;
  }
}
