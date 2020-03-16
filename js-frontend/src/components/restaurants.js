const restaurantsContainer = document.getElementById('restaurants-container')
const newRestaurantState = document.getElementById('new-restaurant-state')
const newRestaurantCity = document.getElementById('new-restaurant-city')
const newRestaurantName = document.getElementById('new-restaurant-name')

class Restaurants{
    constructor() {
        this.restaurants = []
        
        this.adapter = new RestaurantsAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadRestaurants()
        this.getRestaurantName()
    }

    initBindingsAndEventListeners(){
        // this.restaurantsContainer = document.getElementById('restaurants-container')
        this.restaurantForm = document.getElementById('new-restaurant-form')
        this.restaurantForm.addEventListener('submit', this.createRestaurant.bind(this)) //hard bind
    }

    createRestaurant(event){
        event.preventDefault()
        const nameValue = newRestaurantName.value
        const cityValue = newRestaurantCity.value
        const stateValue = newRestaurantState.value
        
        this.adapter.createRestaurant(nameValue, cityValue, stateValue).then(restaurant => {
           
            let newRestaurant = new Restaurant(restaurant)
            newRestaurant.dishes = []
           
            restaurantsContainer.innerHTML += (newRestaurant.renderRestaurantHtml())
           
            newRestaurantState.value = ""
            newRestaurantCity.value = ""
            newRestaurantName.value = ""
            
            document.getElementById("restaurant-list").innerHTML = `"<option value="" disabled selected hidden>Restaurants</option>"`
            this.getRestaurantName()
            
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
            // this.renderRestaurants(restaurants)
           restaurants.forEach(restaurant => {
          let newRestaurant = new Restaurant(restaurant)
        //   newRestaurant.renderRestaurantHtml(restaurant)
          restaurantsContainer.innerHTML += newRestaurant.renderRestaurantHtml()
        })      
        })
    }
        
}