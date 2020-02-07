class Restaurants{
    constructor() {
        this.restaurants = []
        this.adapter = new RestaurantsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadRestaurants()
    }

    initBindingsAndEventListeners(){
        this.restaurantsContainer = document.getElementById('restaurants-container')
        this.newRestaurantName = document.getElementById('new-restaurant-name')
        this.newRestaurantCity = document.getElementById('new-restaurant-city')
        this.newRestaurantState = document.getElementById('new-restaurant-state')
        this.restaurantForm = document.getElementById('new-restaurant-form')
        this.restaurantForm.addEventListener('submit', this.createRestaurant.bind(this)) //hard bind
    }

    createRestaurant(event){
        event.preventDefault()
        const nameValue = this.newRestaurantName.nameValue
        const cityValue = this.newRestaurantName.cityValue
        const stateValue = this.newRestaurantName.stateValue
        this.adapter.createRestaurant(nameValue, cityValue, stateValue)
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