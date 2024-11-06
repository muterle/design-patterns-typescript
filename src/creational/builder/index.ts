// import { MealBox } from './classes/meal-box';
// import { Beans, Beverage, Dessert, Meat, Rice } from './classes/meals';

import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

// const rice = new Rice('Arroz', 5);
// const beans = new Beans('Feijão', 10);
// const meat = new Meat('Carne', 20);
// const beverage = new Beverage('Cerveja', 15);
// const dessert = new Dessert('Sobremesa', 25);

// const mealBox = new MealBox();
// mealBox.add(rice, beans, meat, beverage, dessert);

// console.log(mealBox);

// console.log(mealBox.getPrice());

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeBeverage().makeDessert().getMeal();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();

const mainDishBuilder2 = new MainDishBuilder();
mainDishBuilder2.makeBeverage();
console.log(mainDishBuilder2.getMeal());
console.log(mainDishBuilder2.getPrice());

const veganDishBuilder = new VeganDishBuilder();
veganDishBuilder.makeMeal();
console.log(veganDishBuilder.getMeal());
console.log(veganDishBuilder.getPrice());
