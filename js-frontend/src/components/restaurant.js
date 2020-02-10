class Restaurant{
    constructor(restaurantJSON){
        this.id = restaurantJSON.id
        this.name = restaurantJSON.name
        this.city = restaurantJSON.city
        this.state = restaurantJSON.state
        this.dish = restaurantJSON.dishes[0].name
        // debugger
    }

    renderLi(){
        return `<li>${this.name} - ${this.city}, ${this.state}</li>`
    }

    renderDishLi(){
        // debugger
        return `<li>${this.dish}`
    }

}