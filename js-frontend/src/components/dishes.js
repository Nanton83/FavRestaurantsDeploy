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
        
        this.restaurantBtn = document.getElementById("dishBtn").addEventListener("click", this.getDishOption)
        
    }

    

    createDish(event){
        event.preventDefault()
        const nameValue = this.newDishName.value
        
        this.adapter.createDish(nameValue, restaurantId).then(dish => {
            this.dishes.push(new Dish(dish))
            
            this.render()
        })
    }

    getDishOption() { 

        this.optionIndex = document.getElementById("restaurant-list")
        let restaurantId = this.optionIndex.options.selectedIndex
        debugger
    
        
        console.log(restaurantId) 
    } 

}