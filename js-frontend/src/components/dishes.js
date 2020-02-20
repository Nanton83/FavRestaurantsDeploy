class Dishes{
    constructor() {
        this.dishes = []
        
        this.adapter = new DishesAdapter()
        this.initBindingsAndEventListeners()
        this.fetchAndLoadDishes()
        this.createDishNode()
    }

    initBindingsAndEventListeners(){
        this.restaurantsContainer = document.getElementById('restaurants-container')
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
        .then(() => {
            this.createDishNode()
        })
    }
    
    

    createDishNode(){
        
        let node = document.createElement("li")
        let dishnode = document.createTextNode('Dish')
        node.appendChild(dishnode)
        document.getElementById('dishes-container').appendChild(node)
    }

    render(){
    
        this.restaurantsContainer.innerHTML = this.dishes.map(dish => dish.renderDishLi()).join('')
    
    }

}