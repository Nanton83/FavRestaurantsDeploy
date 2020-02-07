class Restaurant{
    constructor(restaurantJSON){
        this.id = restaurantJSON
        this.name = restaurantJSON.name
        this.city = restaurantJSON.city
        this.state = restaurantJSON.state
    }

    renderLi(){
        return `<li>${this.name} - ${this.city}, ${this.state}</li>`
    }

}