class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :rating, :restaurant_id, :user_id
end
