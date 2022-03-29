import Beverage from './beverage';

export default class Decaf extends Beverage {
  description = 'Decaf Coffee';

  cost(): number {
    return 1.05;
  }
}
