class Restaurant{
    constructor(restaurantJSON){
        this.id = restaurantJSON.id
        this.name = restaurantJSON.name
        this.city = restaurantJSON.city
        this.state = restaurantJSON.state
        this.dishes = restaurantJSON.dishes
    }

    renderDishes(){
        debugger
         this.dishes.map(dish => {
           console.log(dish.name)
        })
    }


    
    renderLi(){
        // let dishes = this.renderDishes()
        
        return `<li>${this.name} - ${this.city}, ${this.state}<br> ${this.renderDishes()}</li>` 
        //this.dishes[0].name is temporary to show the data
    }

}