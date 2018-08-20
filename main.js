const coffeeShop = {
  beans: 40,
  beanPrice: 0.2,
  money: 5000,

  drinkRequirements: {
    latte: { beanRequirements: 10, price: 5 },
    americano: { beanRequirements: 5, price: 3 },
    doubleShot: { beanRequirements: 15, price: 8 },
    frenchPress: { beanRequirements: 12, price: 7 }
  },

  makeDrink: function (drinkType) {
      this.beans -= this.drinkRequirements[drinkType].beanRequirements
  },

  buyBeans: function (numBeans) {
    this.money -= (numBeans * this.beanPrice)
    this.beans += numBeans
  },

  buyDrink: function (drinkType) {
    if (this.validOrder(drinkType)) {
      this.makeDrink(drinkType)
      this.money += this.drinkRequirements[drinkType].price
    }
  },

  validOrder: function (drinkType) {
    const drink = this.drinkRequirements[drinkType]
    if (!drink) {
      console.log("Sorry, we don't make " + drinkType)
      return false;
    }
    if (drink.beanRequirements > this.beans) {
      console.log("Sorry, we're all out of beans!")
      return false;
    }
    console.log("Enjoy your " + drinkType + "!")
    return true;
  }
}

coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"