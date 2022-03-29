import Beverage from './beverage';

export default class DarkRoastWithMilk extends Beverage {
  description = 'Dark Roast Coffee With Milk';

  cost(): number {
    return 1.09;
  }
}
