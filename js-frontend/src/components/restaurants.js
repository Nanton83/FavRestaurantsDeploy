class Restaurants{
    constructor() {
        this.restaurants = []
        this.adapter = new RestaurantsAdapter()
        this.fetchAndLoadRestaurants()
    }

    fetchAndLoadRestaurants(){
        this.adapter.getRestaurants().then(restaurants => {
            console.log(restaurants)
        })
    }
}