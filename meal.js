const thanksgivingMeal = {
    starter: {
        fruit: " fresh strawberries",
        wine: "moscato",
        calories: 180
    },

    entree: {
        meat: "oven baked ham with pineapples and brown sugar on top",
        alt: "stuffed green peppers",

        vegetables: {
            potatoes: "Creamed mashed potatoes are also available",
            greens: "French beans",
            salad: "Cesar salad"
        },

        sides: {
            bread: "garlic bread rolls",
            pasta: "mac n Cheese"
        },

        calories: 450
    },

    dessert: {
        ice_cream: "cookies and cream",
        cake: " and, or frosted pecan pie",
        calories: 300
    },

    total_cost: 25.0,

    senior_discount: .10,

    prettyPrint: function() {

        alert("Inside prettyPrint");

        console.log(this.starter);
        console.log(this.entree);
        console.log(this.dessert);

        let menuStr =
            "Start your meal with " + this.starter.fruit +
            " and a hefty glass of " + this.starter.wine + ". " +

            "Help yourself to " + this.entree.meat +
            " or " + this.entree.alt +
            " with a side " + this.entree.vegetables.salad +
            ". " + this.entree.vegetables.greens +
            " and " + this.entree.vegetables.potatoes + ". " +

            "Have a side! Plenty of " +
            this.entree.sides.bread +
            " and " + this.entree.sides.pasta + ". " +

            "Finish your meal with some sweets, " +
            this.dessert.ice_cream +
            " ice-cream, " +
            this.dessert.cake;

        console.log(menuStr);

        return menuStr;
    },

    totalPrice: function(isSenior) {

        alert("Inside totalPrice");

        if (isSenior) {

            console.log("Senior price");

            return this.total_cost -
                (this.total_cost * this.senior_discount);

        } else {

            console.log("Adult price");

            return this.total_cost;
        }
    },

    totalCalories: function() {

        alert("Inside totalCalories");

        console.log("Adding calories");

        return this.starter.calories +
               this.entree.calories +
               this.dessert.calories;
    },

    caloriesFrom: function(indicator) {

        alert("Inside caloriesFrom");

        if (indicator == 1) {
            return this.starter.calories;

        } else if (indicator == 2) {
            return this.entree.calories;

        } else if (indicator == 3) {
            return this.dessert.calories;
        }
    }
};


// Get the HTML areas

let greeting = document.querySelector(".greeting");
let meal = document.querySelector(".fullMeal");
let price = document.querySelector(".priceInfo");
let calorieInfo = document.querySelector(".calorieInfo");


greeting.textContent = "Happy Thanksgiving! We hope you enjoy!";

meal.textContent = thanksgivingMeal.prettyPrint();

price.textContent =
    "Seniors get a 10% discount, the total cost for your Thanksgiving meal? " +
    "Adults :$" + thanksgivingMeal.totalPrice(false).toFixed(2) +
    ", Seniors :$" + thanksgivingMeal.totalPrice(true).toFixed(2) + ".";

calorieInfo.textContent =
    "Worried about calories? Total damage is " +
    thanksgivingMeal.totalCalories() +
    " (starter: " +
    thanksgivingMeal.caloriesFrom(1) +
    ", entree: " +
    thanksgivingMeal.caloriesFrom(2) +
    ", dessert : " +
    thanksgivingMeal.caloriesFrom(3) + ")";