class Dishes{
    constructor() {
        this.dishes = []
        this.adapter = new DishesAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadDishes()
    }

    initBindingsAndEventListeners(){
        this.dishesContainer = document.getElementById('dishes-container')
    }

    fetchAndLoadDishes(){
        this.adapter
        .getDishes()
        .then(dishes => {
            dishes.forEach(dish => this.dishes.push(new Dish(dish)))
                    
            })
            .then(() => {
                this.render()
        })
    }

    render(){
        
        this.dishesContainer.innerHTML = this.dishes.map(dish => dish.renderDishLi()).join('')
        

    }

}