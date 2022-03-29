import Beverage from './beverage';

export default class Espresso extends Beverage {
  description = 'Espresso';

  cost(): number {
    return 1.99;
  }
}
