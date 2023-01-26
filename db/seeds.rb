# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "seeding Users..."

user1 = User.create(username: "username1", password: "abc123", name: "Connor", image_url: 'https://clutchpoints.com/wp-content/uploads/2021/10/Seahawks-Russell-Wilson-Geno-Smith-Seahawks-Rams-1000x600.jpeg')
user2 = User.create(username: "username2", password: "abc123", name: "Teejay", image_url: 'https://pbs.twimg.com/media/E7hadohVEAY1mpJ.jpg')
user3 = User.create(username: "usernam3", password: "abc123", name: "Matt")

puts "seeding Restaurants..."

rest1 = Restaurant.create(name: "Ay Mamita", description: "Carribean Sandwiches", image_url: '/paseo-caribbean.jpg')
rest2 = Restaurant.create(name: "Nate's Wings and Waffles", description: "chicken and waffles", image_url: '/chicken_waffles.jpg')
rest3 = Restaurant.create(name: "Mio Posto", description: "Pizza", image_url: '/margherita.jpg')
rest4 = Restaurant.create(name: "Wendys", description: "Booger", image_url: '/garbage.jpg')
rest5 = Restaurant.create(name: "Taco Bell", description: "Fake Mexican Food", image_url: '/yuckytaco.jpg')


puts "seeding Reviews..."

review1 =  Review.create(comment: "fire", rating: 5, user_id: 1, restaurant_id: 3)
review2 =  Review.create(comment: "trash", rating: 1, user_id: 2, restaurant_id: 2)
review3 =  Review.create(comment: "average", rating: 3, user_id: 3, restaurant_id: 1)
review4 = Review.create(comment: "nice ambience", rating: 4, user_id: 3, restaurant_id: 4)
review5 = Review.create(comment: "Horrible Service", rating: 1, user_id: 3, restaurant_id: 3)
review6 = Review.create(comment: "Tables Dirty", rating: 1, user_id: 3, restaurant_id: 5)