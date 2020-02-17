class Restaurant{
    constructor(restaurantJSON){
        this.id = restaurantJSON.id
        this.name = restaurantJSON.name
        this.city = restaurantJSON.city
        this.state = restaurantJSON.state
        this.dishes = restaurantJSON.dishes
        
        
    }

    renderLi(){
        
        return `<li>${this.name} - ${this.city}, ${this.state}, ${this.dishes[0].name}</li>` //this.dishes[0].name is temporary to show the data exists
    }

}