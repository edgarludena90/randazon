# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Restaurant.destroy_all
Review.destroy_all
User.destroy_all

puts ("seeding info ")

5.times do 
  Restaurant.create!(
    name: Faker::Restaurant.name,
    style: Faker::Restaurant.type
  )
end

  10.times do 
    Review.create!(
    comment: Faker::Restaurant.review,
    rating: rand(2..5),
    restaurant_id: Restaurant.ids.sample,
    user_id: User.ids.sample,
    )
  end

    User.create(name: "Nick",username: "captainNick",email: "nick@example.com", password: "password", password_confirmation: "password")
    User.create(name:  "edgar",username: "captainedgar",email: "edgar@example.com", password:"password",password_confirmation: "password")
    User.create(name: "Jeff",username: "burgerJeff",email: "jeff@example.com", password: "password",password_confirmation: "password")
    User.create(name: "Rich",username: "Slickrich",email: "rich@example.com", password: "password",password_confirmation: "password")
  

puts ("seeding done ")
