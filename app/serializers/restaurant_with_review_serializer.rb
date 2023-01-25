class RestaurantWithReviewSerializer < ActiveModel::Serializer
  attributes :id, :name, :style 
  has_many :reviews
end