class RestaurantsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_record_not_found
  before_action :set_restaurant, only: [:show, :update, :destroy]

  # GET /restaurants
  def index
    @restaurants = Restaurant.all

    render json: @restaurants
  end

  # GET /restaurants/1
  def show
    restaurant = Restaurant.find_by(id:params[:id])
    if restaurant
      render json: restaurant, serializer: RestaurantWithReviewSerializer
    else 
      render json: {error: "Review not found"}, status: 404
    end
    
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_restaurant
      @restaurant = Restaurant.find(params[:id])
    end
end
