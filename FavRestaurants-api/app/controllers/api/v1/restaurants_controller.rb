
class Api::V1::RestaurantsController < ApplicationController

    def index
        @restaurants = Restaurant.all
        render json: @restaurants
    end 

    def new
        @restaurant = Restaurant.new
    end

    def show
        @restaurant = Restaurant.find_by(id: params[:id])
        render json: @restaurant, include: ['dishes']
    end

    def create
        binding.pry
        @restaurant = Restaurant.new(restaurant_params)
        binding.pry
        @restaurant.save
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
        params.require(:restaurant).permit(:name, :city, :state)
    end

end
