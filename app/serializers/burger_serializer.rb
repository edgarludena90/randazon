class BurgerSerializer < ActiveModel::Serializer
  attributes :id, :restaurant_id, :name, :price, :image, :status, :description
end
