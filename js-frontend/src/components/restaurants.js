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
            restaurants.forEach(restaurant => this.restaurants.push(restaurant))
        })
        .then(() => {
            this.render()
        })
    }

    render(){
        console.log('rendering...')
        const restaurantsContainer = document.getElementById('restaurants-container')
        restaurantsContainer.innerHTML = 'my restaurants here'
        console.log('Your Favorite Restaurants Are:', this.restaurants)
    }
}