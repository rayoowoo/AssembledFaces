# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all

tony = User.create!(email: "tonystark@gmail.com", password:"tonystark", birth_date: Date.parse("17/4/1965"), gender: "Male", first_name: "Tony", last_name:"Stark", location: "New York", workplace: "Avengers", education: "MIT", current_city: "New York", hometown: "Manhattan", bio: "I am Iron Man.")
post1 = Post.create!(body: "Jarvis... sometimes you gotta run before you walk.", author_id: tony.id, user_id: tony.id)
post2 = Post.create!(body: "You can take away my house, all my tricks and toys. One thing you can’t take away? I am Iron Man.", author_id: tony.id, user_id: tony.id)