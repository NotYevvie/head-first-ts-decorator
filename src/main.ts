import Beverage from './beverage';
import DarkRoastWithMilk from './darkRoastWithMilk';
import EspressoWithMilkAndMochaAndWhip from './espressoWithMilkAndMochaAndWhip';
import HouseBlendWithSoy from './houseBlendWithSoy';

const darkRoastWithMilk: Beverage = new DarkRoastWithMilk();
console.log(
  `${darkRoastWithMilk.getDescription()} $${darkRoastWithMilk.cost()}`
);

const espressoWithMilkAndMochaAndWhip: Beverage =
  new EspressoWithMilkAndMochaAndWhip();
console.log(
  `${espressoWithMilkAndMochaAndWhip.getDescription()} $${espressoWithMilkAndMochaAndWhip.cost()}`
);

const houseBlendWithSoy: Beverage = new HouseBlendWithSoy();
console.log(
  `${houseBlendWithSoy.getDescription()} $${houseBlendWithSoy.cost()}`
);
