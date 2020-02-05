class Dishes{
    constructor() {
        this.dishes = []
        this.adapter = new DishesAdapter()
        this.fetchAndLoadDishes()
    }

    fetchAndLoadDishes(){
        this.adapter.getDishes().then(dishes => {
            console.log(dishes)
        })
    }
}