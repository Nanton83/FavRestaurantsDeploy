class Restaurants{
    constructor() {
        this.restaurants = []
    
        this.adapter = new RestaurantsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadRestaurants()
        this.fillDropDown()
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
            
            this.renderRestaurants()
            
        })
    }

    fillDropDown(){
       
        let select = document.getElementById("restaurant-list")
        let options = []
        this.adapter
        .getRestaurants()
        .then(restaurants => {
            restaurants.forEach(restaurant =>
                options.push(restaurant.name))
        })
      
        for(var i = 0; i < options.length; i++) {
            var opt = options[i];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            select.appendChild(el);
        }
      }


    fetchAndLoadRestaurants(){
        this.adapter
        .getRestaurants()
        .then(restaurants => {
            this.renderRestaurants(restaurants)
        })   
             
    }
        
    renderRestaurants(restaurantsArray) {
    
        restaurantsArray.forEach(restaurant => {
          let newRestaurant = new Restaurant(restaurant)
          
          this.restaurantsContainer.innerHTML += newRestaurant.renderRestaurantHtml()
        })
    }

      

  
}