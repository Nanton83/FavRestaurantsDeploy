class Restaurants{
    constructor() {
        this.restaurants = []
        this.adapter = new RestaurantsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadRestaurants()
    }

    initBindingsAndEventListeners(){
        this.restaurantsContainer = document.getElementById('restaurants-container')
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
        this.restaurantsContainer.innerHTML = this.restaurants.map(restaurant => restaurant.renderLi()).join('')
    }
}