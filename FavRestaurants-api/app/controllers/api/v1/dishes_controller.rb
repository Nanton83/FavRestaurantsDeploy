class Api::V1::DishesController < ApplicationController

    def index
        @dishes = Dish.all
        render json: @dishes
    end 

    def show
        @dish = Dish.find_by(id: params[:id])
        render json: @dish
    end

    def create
        @dish = Dish.create(dish_params)
        
        # binding.pry
        render json: @dish
    end

    def update
        @dish = Dish.find_by(id: params[:id])
        @dish.update(dish_params)
        render json: @dish
    end 

    def destroy
        @dish = Dish.find_by(id: params[:id])
        @dish.delete 
        render json: {dishId: @dish.id}
    end

    private

    def dish_params
        params.require(:dish).permit(:name, :restaurant_id)
    end

end
