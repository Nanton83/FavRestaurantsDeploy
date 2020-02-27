class Restaurant{
    constructor(restaurantJSON){
        this.id = restaurantJSON.id
        this.name = restaurantJSON.name
        this.city = restaurantJSON.city
        this.state = restaurantJSON.state
        this.dishes = restaurantJSON.dishes
    }



    renderRestaurantHtml() {
        return (
          `<li>${this.name} - ${this.city}, ${this.state}<br>\
          
            <ul>
              ${this.dishes.map(dish => {
                return (`<li>${dish.name}</li>`)
                }).join('')}
            </ul>
        
          `
        )
    }

    
  
    

}

