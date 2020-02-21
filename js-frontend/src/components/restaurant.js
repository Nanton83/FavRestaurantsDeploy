class Restaurant{
    constructor(restaurantJSON){
        this.id = restaurantJSON.id
        this.name = restaurantJSON.name
        this.city = restaurantJSON.city
        this.state = restaurantJSON.state
        this.dishes = restaurantJSON.dishes
    }

//     renderDishes(object){
        
//         object.dishes.map(dish => {
           
//           return dish.name
//        })
//    }


    renderLi(){
        
        // let dishes = renderDishes(this)
        
        return `<li>${this.name} - ${this.city}, ${this.state} </li> <button onclick="dishCreate()">Create New Dish</button> ` 
        
    }

}