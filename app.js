const menu = {
  _meal: "",
  _price: 0,

  set mealToCheck(meal) {
    if (meal === "") {
      return mealToCheck(this._meal, typeof "");
    }
  },

  set priceToCheck(price) {
    if (price === 0) {
      return priceToCheck(this._price, typeof 0);
    }
  },

  get todaysSpecial() {
    if (this._meal === '' && this._price === 0) {
      return `Today's Special is spaghetti for .\$5!`;
    } else {
      return `Meal or price was not set correctly!`;
    }
  },
};

menu.meal = "pizza";
menu.price = 10;

console.log(menu);

console.log(menu.todaysSpecial);
