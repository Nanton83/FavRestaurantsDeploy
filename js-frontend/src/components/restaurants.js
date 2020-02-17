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
        const nameValue = this.newRestaurantName.value
        const cityValue = this.newRestaurantCity.value
        const stateValue = this.newRestaurantState.value
        
        this.adapter.createRestaurant(nameValue, cityValue, stateValue).then(restaurant => {
            this.restaurants.push(new Restaurant(restaurant))
            
            this.render()
        })
    }

    fetchAndLoadRestaurants(){
        this.adapter
        .getRestaurants()
        .then(restaurants => {
            
            restaurants.forEach(restaurant => this.restaurants.push(new Restaurant(restaurant)))
            // debugger
        })
        // this.restaurants[0].dishes[0].name
        .then(() => {
            
            this.render()
        })
    }
    
    render(){

        this.restaurantsContainer.innerHTML = this.restaurants.map(restaurant => restaurant.renderLi()).join('')
      
        
        // this.dishesContainer.innerHTML = this.restaurants.map(restaurant => restaurant.dishes.map(dish => dish.name.renderDishLi())).join('')
        

    }
}