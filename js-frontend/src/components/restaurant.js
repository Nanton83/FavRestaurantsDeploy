class Restaurant{
    constructor(restaurantJSON){
        this.id = restaurantJSON
        this.name = restaurantJSON.name
        this.city = restaurantJSON.city
        this.state = restaurantJSON.state
    }
}