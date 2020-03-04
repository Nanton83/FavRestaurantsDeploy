class Restaurants{
    constructor() {
        this.restaurants = []
        
        this.adapter = new RestaurantsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadRestaurants()
        this.getRestaurantName()
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

    getRestaurantName(){
        this.adapter
        .getRestaurants()
        .then(restaurants => {
            
            restaurants.forEach(restaurant => {
                
                
                
                this.buildDropDown(restaurant)
            })
        })   
    }

    buildDropDown(restaurant){
        let select = document.getElementById("restaurant-list")
        let options = []
        options.push(restaurant)
        for(let i = 0; i < options.length; i++) {
            let opt = options[i];
            let el = document.createElement("option");
            el.textContent = opt.name;
            el.value = opt.id;
            
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