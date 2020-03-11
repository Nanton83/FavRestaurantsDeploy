
class Api::V1::RestaurantsController < ApplicationController

    def index
    
        @restaurants = Restaurant.all
       
        render json: @restaurants.to_json(:include => {
            :dishes => {:only => [:id, :name, :restaurant_id]}
        })
    end 

    def show
        @restaurant = Restaurant.find_by(id: params[:id])
        render json: @restaurant
    end

    def create
        # binding.pry
        @restaurant = Restaurant.create(restaurant_params)
        
        render json: @restaurant
    end

    def update
        @restaurant = Restaurant.find_by(id: params[:id])
        @restaurant.update(restaurant_params)
        render json: @restaurant
    end 

    def destroy
        @restaurant = Restaurant.find_by(id: params[:id])
        @restaurant.delete 
        render json: {restaurantId: @restaurant.id}
    end

    private

    def restaurant_params
        params.require(:restaurant).permit(:name, :city, :state, dishes_attributes: [:id, :name, :restaurant_id])
    end

end
