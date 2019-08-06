# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Post.destroy_all

tony = User.create!(email: "tonystark@gmail.com", password:"tonystark", birth_date: Date.parse("17/4/1965"), gender: "Male", first_name: "Tony", last_name:"Stark", location: "New York", workplace: "Avengers", education: "MIT", current_city: "New York", hometown: "Manhattan", bio: "I am Iron Man.")
steve = User.create!(email: "steverogers@gmail.com", password: "steverogers", birth_date: Date.parse("4/7/1918"), gender: "Male", first_name: "Steve", last_name: "Rogers", location: "New York", workplace: "Avengers", education: "West Point", current_city: "New York", hometown: "Brooklyn", bio: "I can do this all day.")

friendship1 = Friendship.create!(requested_id: tony.id, requester_id: steve.id)

post1 = Post.create!(body: "Jarvis... sometimes you gotta run before you walk.", author_id: tony.id, user_id: tony.id)
post2 = Post.create!(body: "You can take away my house, all my tricks and toys. One thing you can’t take away? I am Iron Man.", author_id: tony.id, user_id: tony.id)

post3 = Post.create!(body: "Before we get started, does anyone want to get out?", author_id: steve.id, user_id: steve.id)
post4 = Post.create!(body: "I'm sorry, Tony. If I see a situation pointed south, I can't ignore it. Sometimes I wish I could.", author_id: steve.id, user_id: tony.id)

comment1 = Comment.create!(body: "No you don't.", author_id: tony.id, post_id: post4.id)
comments2 = Comment.create!(body: "You're right. I don't.", author_id: steve.id, post_id: post4.id, parent_comment_id: comment1.id)

photo1 = open('https://s3.amazonaws.com/assembled-faces-seed/ironman-tank-scene.jpg')
tony.profile_photo.attach(io: photo1, filename: 'ironman-tank-scene.jpg')
# FROM https://www.inverse.com/article/55449-avengers-endgame-iron-man-death-tony-stark-final-line-was-added-at-the-last-minute. All rights to go Marvel Studios.

photo2 = open('https://s3.amazonaws.com/assembled-faces-seed/captain-america.jpg')
steve.profile_photo.attach(io: photo2, filename: 'captain-america.jpg')
# FROM https://boygeniusreport.files.wordpress.com/2014/04/captain-america.jpg?quality=98&strip=all

photo3 = open('https://s3.amazonaws.com/assembled-faces-seed/Iron-Man-logo.jpg')
tony.cover_photo.attach(io: photo3, filename: 'ironman-logo.jpg')
#  FROM 1000logos.net / iron - man - logo.All rights go to Marvel Studios.

photo4 = open('https://s3.amazonaws.com/assembled-faces-seed/captain-america-logo.jpg')
steve.cover_photo.attach(io: photo4, filename: 'captain-america-logo.jpg')
# FROM http://getwallpapers.com/image/65180

postphoto1 = open('https://s3.amazonaws.com/assembled-faces-seed/ironman-post.jpg')
post2.photo.attach(io: postphoto1, filename: 'ironman-post.jpg')
# FROM {/* Image sourced from: https://www.instagram.com/p/Bw9nt8mnMGb/ */}

photo5 = open('https://s3.amazonaws.com/assembled-faces-seed/ironman1.jpg')
tony.photos.attach(io: photo5, filename:"ironman1.jpg")
# https://am22.akamaized.net/tms/cnt/uploads/2019/08/Iron-Man-3-Is-the-One-of-the-Best-Explorations-of-the-Emotional-Turmoil-of-Being-a-Hero-1200x675.jpg

photo6 = open('https://s3.amazonaws.com/assembled-faces-seed/ironman2.jpg')
tony.photos.attach(io: photo6, filename:"ironman2.jpg")
# https://7lwy5tgst9-flywheel.netdna-ssl.com/wp-content/uploads/2018/01/Iron-Man.jpg

photo7 = open('https://s3.amazonaws.com/assembled-faces-seed/ironman3.png')
tony.photos.attach(io: photo7, filename:"ironman3.png")
# https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/07/Screen-Shot-2017-07-03-at-11.30.38.png

photo8 = open('https://s3.amazonaws.com/assembled-faces-seed/ironman4.jpg')
tony.photos.attach(io: photo8, filename:"ironman4.jpg")
# https://e3.365dm.com/19/04/768x432/skynews-avengers-endgame-marvel_4649149.jpg?20190424150753
