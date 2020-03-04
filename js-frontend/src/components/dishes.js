class Dishes{
    constructor() {
        this.dishes = []
        this.adapter = new DishesAdapter()
        this.initBindingsAndEventListeners()
        
    }

    initBindingsAndEventListeners(){
        this.dishForm = document.getElementById('new-dish-form')
        this.newDishName = document.getElementById('new-dish-name')
        this.restaurantId = document.getElementById('new-dish-restaurant-id')
        this.restaurantBtn = document.getElementById("dishBtn")
        this.restaurantBtn.addEventListener("click", this.createDish.bind(this))
    }

    createDish(event) { 
        event.preventDefault()
        this.optionIndex = document.getElementById("restaurant-list")
        const dishName = "Test Dish"
        const restaurantId = this.optionIndex.options.selectedIndex
        
        this.adapter.createDish(dishName, restaurantId)
        // .then(dish => {
        //     this.dishes.push(new Dish(dish))
    }

}