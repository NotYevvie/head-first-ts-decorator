import Beverage from './beverage';

export default class DarkRoast extends Beverage {
  description = 'Dark Roast Coffee';

  cost(): number {
    return 0.99;
  }
}
