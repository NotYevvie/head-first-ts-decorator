import Beverage from './beverage';

export default class EspressoWithMilkAndMochaAndWhip extends Beverage {
  description = 'Espresso With Milk And Mocha And Whip';

  cost(): number {
    return 2.39;
  }
}
