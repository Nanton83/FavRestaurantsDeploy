class Dishes{
    constructor() {
        this.dishes = []
        
        this.adapter = new DishesAdapter()
        this.initBindingsAndEventListeners()
        // this.fetchAndLoadDishes()
        // this.createDishNode()
    }

    initBindingsAndEventListeners(){
        this.dishForm = document.getElementById('new-dish-form')
        this.newDishName = document.getElementById('new-dish-name')
        this.restaurantId = document.getElementById('new-dish-restaurant-id')
        
    }

    

    createDish(event){
        event.preventDefault()
        const nameValue = this.newDishName.value
        
        this.adapter.createDish(nameValue, restaurantId).then(dish => {
            this.dishes.push(new Dish(dish))
            
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