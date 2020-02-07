class Restaurants{
    constructor() {
        this.restaurants = []
        this.adapter = new RestaurantsAdapter()
        this.fetchAndLoadRestaurants()
    }

    fetchAndLoadRestaurants(){
        this.adapter
        .getRestaurants()
        .then(restaurants => {
            restaurants.forEach(restaurant => this.restaurants.push(new Restaurant(restaurant)))
        })
        .then(() => {
            this.render()
        })
    }

    render(){
        const restaurantsContainer = document.getElementById('restaurants-container')
        restaurantsContainer.innerHTML = this.restaurants.map(restaurant => `<li>${restaurant.name}</li>`).join('')
    }
}