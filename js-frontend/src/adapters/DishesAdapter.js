class DishesAdapter{
    constructor(){
        this.baseUrl = 
        'http://localhost:3000/api/v1/dishes'
    }

    getDishes(){
        return fetch(this.baseUrl).then(results => results.json()
        )
    }
}