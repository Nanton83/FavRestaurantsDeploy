class Dishes{
    constructor() {
        this.dishes = []
        
        this.adapter = new DishesAdapter()
        // this.initBindingsAndEventListeners()
        // this.fetchAndLoadDishes()
        // this.createDishNode()
    }

    initBindingsAndEventListeners(){
        this.newDishName = document.getElementById('new-dish-name')
    }

    

    createDish(event){
        event.preventDefault()
        const nameValue = this.newRestaurantName.value
        const cityValue = this.newRestaurantCity.value
        const stateValue = this.newRestaurantState.value
        
        this.adapter.createRestaurant(nameValue, cityValue, stateValue).then(restaurant => {
            this.restaurants.push(new Restaurant(restaurant))
            
            this.render()
        })
    }

    // fetchAndLoadDishes(){
    //     this.adapter
    //     .getDishes()
    //     .then(dishes => {
    //         dishes.forEach(dish => this.dishes.push(new Dish(dish)))
                    
    //         })
    //         .then(() => {
    //             this.render()
    //     })
    //     // .then(() => {
    //     //     this.createDishNode()
    //     // })
    // }
    
    

    // createDishNode(){
        
    //     let node = document.createElement("li")
    //     let dishnode = document.createTextNode('Dish')
    //     node.appendChild(dishnode)
    //     document.getElementById('dishes-container').appendChild(node)
    // }

    // render(){
    
    //     // this.restaurantsContainer.innerHTML = this.dishes.map(dish => dish.renderDishLi()).join('')
    
    // }

}