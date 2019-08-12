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
Comment.destroy_all
Friendship.destroy_all
Like.destroy_all

# users
tony = User.create!(email: "tonystark@gmail.com", password:"tonystark", birth_date: Date.parse("17/4/1965"), gender: "Male", first_name: "Tony", last_name:"Stark", location: "New York", workplace: "Avengers", education: "MIT", current_city: "New York", hometown: "Manhattan", bio: "I am Iron Man.")
steve = User.create!(email: "steverogers@gmail.com", password: "steverogers", birth_date: Date.parse("4/7/1918"), gender: "Male", first_name: "Steve", last_name: "Rogers", location: "New York", workplace: "Avengers", education: "West Point", current_city: "New York", hometown: "Brooklyn", bio: "I can do this all day.")
natasha = User.create!(email: "natasharomanoff@gmail.com", password: "blackwidow", birth_date: Date.parse("17/2/1975"), gender: "Female", first_name: "Natasha", last_name: "Romanoff", location: "New York", workplace: "Avengers", education: "Red Room", current_city: "New York", hometown: "Volgograd, Soviet Union", bio: "I'm always picking up after you boys.")
bruce = User.create!(email: "brucebanner@gmail.com", password: "brucebanner", birth_date: Date.parse("9/8/1974"), gender: "Male", first_name: "Bruce", last_name: "Banner", location: "New York", workplace: "Avengers", education: "Desert State University", current_city: "New York", hometown: "Dayton, OH", bio: "HULK SMASH!!")
clint = User.create!(email: "clintbarton@gmail.com", password: "clintbarton", birth_date: Date.parse("6/5/1979"), gender: "Male", first_name: "Clint", last_name: "Barton", location: "Missouri", workplace: "SHIELD", current_city: "New York", hometown: "Waverly, OH", bio: "Just can't seem to miss.")
thor = User.create(email: "thorodinson@gmail.com", password: "thorodinson", birth_date: Date.parse("11/3/0962"), gender: "Male", first_name: "Thor", last_name: "Odinson", location: "Asgard", workplace: "Avengers", education: "Asgard", current_city: "New Asgard", hometown: "Asgard", bio: "BRING ME THANOS." )
nick = User.create(email: "nickyfury@gmail.com", password: "nickfury", birth_date: Date.parse("4/7/1950"), gender: "Male", first_name: "Nicholas", last_name: "Fury", location: "New York", workplace: "SHIELD", education: "West Point", current_city: "New York", hometown: "Manhattan", bio: "If you want to stay ahead of me, you need both eyes open.")

# friends
friendship1 = Friendship.create!(requested_id: tony.id, requester_id: steve.id, status: "accepted")
friendship2 = Friendship.create!(requested_id: natasha.id, requester_id: steve.id, status: "accepted")
friendship3 = Friendship.create!(requested_id: bruce.id, requester_id: tony.id, status: "accepted")
friendship4 = Friendship.create!(requested_id: thor.id, requester_id: clint.id, status: "accepted")
friendship5 = Friendship.create!(requested_id: clint.id, requester_id: steve.id, status: "accepted")
friendship6 = Friendship.create!(requested_id: bruce.id, requester_id: natasha.id, status: "accepted")
friendship6 = Friendship.create!(requested_id: clint.id, requester_id: natasha.id, status: "accepted")
friendship7 = Friendship.create!(requested_id: tony.id, requester_id: thor.id, status: "accepted")
friendship8 = Friendship.create!(requested_id: thor.id, requester_id: natasha.id, status: "accepted")
friendship9 = Friendship.create!(requested_id: nick.id, requester_id: tony.id, status: "pending")
friendship10 = Friendship.create!(requested_id: clint.id, requester_id: tony.id, status: "accepted")
friendship11 = Friendship.create!(requested_id: tony.id, requester_id: natasha.id, status: "accepted")

# self posts
post1 = Post.create!(body: "Jarvis... sometimes you gotta run before you walk.", author_id: tony.id, user_id: tony.id)
post2 = Post.create!(body: "You can take away my house, all my tricks and toys. One thing you can’t take away? I am Iron Man.", author_id: tony.id, user_id: tony.id)
post3 = Post.create!(body: "Before we get started, does anyone want to get out?", author_id: steve.id, user_id: steve.id)
post4 = Post.create!(body: "The price of freedom is high, it always has been. And it's a price I'm willing to pay. And if I'm the only one, then so be it.", author_id: steve.id, user_id: steve.id)
post5 = Post.create!(body: "I'm always picking up after you boys.", author_id: natasha.id, user_id: natasha.id)
post6 = Post.create!(body: "HULK SMASH!", author_id: bruce.id, user_id: bruce.id)
post7 = Post.create!(body: "The city is flying, we’re fighting an army of robots and I have a bow and arrow. None of this makes sense.", author_id: clint.id, user_id: clint.id)
post7 = Post.create!(body: "I see better from a distance.", author_id: clint.id, user_id: clint.id)
post8 = Post.create!(body: "Fortunately, I am mighty.", author_id: thor.id, user_id: thor.id)

# other posts
post9 = Post.create!(body: "I'm sorry, Tony. If I see a situation pointed south, I can't ignore it. Sometimes I wish I could.", author_id: steve.id, user_id: tony.id)
post10 = Post.create!(body: "I'm a huge fan of the way you lose control and turn into an enormous green rage monster.", author_id: tony.id, user_id: bruce.id)
post11 = Post.create!(body: "It was quite the buzz around here, finding you in the ice. I thought Coulson was gonna swoon.", author_id: natasha.id, user_id: steve.id)
post12 = Post.create!(body: "That's my secret, Cap: I'm always angry.", author_id: bruce.id, user_id: steve.id)
post13 = Post.create!(body: "No team, only Hulk.", author_id: bruce.id, user_id: thor.id)
post14 = Post.create!(body: "Hulk, stop! Just for once in your life don't smash.", author_id: thor.id, user_id: bruce.id)
post15 = Post.create!(body: "I notice you've copied my beard. Oh, by the way, this is a friend of mine: tree.", author_id: thor.id, user_id: steve.id)
post16 = Post.create!(body: "I thought you retired.", author_id: tony.id, user_id: clint.id)
post17 = Post.create!(body: "Well done with the new chest piece. I'm reading significantly higher output and your vitals all look promising.", author_id: natasha.id, user_id: tony.id)
post18 = Post.create!(body: "I don't know, the truth is a matter of circumstances. It's not all things to all people all the time, and neither am I.", author_id: natasha.id, user_id: steve.id)
post19 = Post.create!(body: "Hey, big guy. Sun's getting real low.", author_id: natasha.id, user_id: bruce.id)
post20 = Post.create!(body: "We've come a long way since Budapest.", author_id: clint.id, user_id: natasha.id)

# comments
comment1 = Comment.create!(body: "No you don't.", author_id: tony.id, post_id: post9.id)
comments2 = Comment.create!(body: "You're right. I don't.", author_id: steve.id, post_id: post9.id, parent_comment_id: comment1.id)

# Profile photos
photo1 = open('https://s3.amazonaws.com/assembled-faces-seed/ironman-tank-scene.jpg')
tony.profile_photo.attach(io: photo1, filename: 'ironman-tank-scene.jpg')
# FROM https://www.inverse.com/article/55449-avengers-endgame-iron-man-death-tony-stark-final-line-was-added-at-the-last-minute. All rights to go Marvel Studios.

photo2 = open('https://s3.amazonaws.com/assembled-faces-seed/captain-america.jpg')
steve.profile_photo.attach(io: photo2, filename: 'captain-america.jpg')
# FROM https://boygeniusreport.files.wordpress.com/2014/04/captain-america.jpg?quality=98&strip=all

photo9 = open('https://s3.amazonaws.com/assembled-faces-seed/black-widow.jpg')
natasha.profile_photo.attach(io: photo9, filename: 'black-widow.jpg')
# https://d3c1jucybpy4ua.cloudfront.net/data/62251/big_picture/black-widow.jpg?1554199500

photo10 = open('https://s3.amazonaws.com/assembled-faces-seed/bruce.jpg')
bruce.profile_photo.attach(io: photo10, filename: 'bruce.jpg')
# https://cdn.vox-cdn.com/thumbor/IaVgyD2-ki_UweRzzApwV-HW0ZU=/0x0:2048x1080/1200x0/filters:focal(0x0:2048x1080):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/16190162/AvengersEndgame5cb8bb7519192.jpg


photo11 = open('https://s3.amazonaws.com/assembled-faces-seed/clint.jpg')
clint.profile_photo.attach(io: photo11, filename: 'clint.jpg')
# https://www.thewrap.com/wp-content/uploads/2015/04/jeremy-renner-hawkeye.jpg


photo12 = open('https://s3.amazonaws.com/assembled-faces-seed/thor.jpg')
thor.profile_photo.attach(io: photo12, filename: 'thor.jpg')
# https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/avengers-endgame-thor-hammer-axe-700x329.jpg


photo13 = open('https://s3.amazonaws.com/assembled-faces-seed/nick.jpg')
nick.profile_photo.attach(io: photo13, filename: 'nick.jpg')
# https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/05/1486123002-nick-fury-avengers.jpg?resize=480:*


# Cover photos

photo3 = open('https://s3.amazonaws.com/assembled-faces-seed/Iron-Man-logo.jpg')
tony.cover_photo.attach(io: photo3, filename: 'ironman-logo.jpg')
#  FROM 1000logos.net / iron - man - logo.All rights go to Marvel Studios.

photo4 = open('https://s3.amazonaws.com/assembled-faces-seed/captain-america-logo.jpg')
steve.cover_photo.attach(io: photo4, filename: 'captain-america-logo.jpg')
# FROM http://getwallpapers.com/image/65180

photo10 = open('https://s3.amazonaws.com/assembled-faces-seed/blackwidow-logo.jpg')
natasha.cover_photo.attach(io: photo10, filename: 'blackwidow-logo.jpg')
# https://i.pinimg.com/originals/35/0f/33/350f3313608d16d13989dd78c06c2a08.jpg

photo14 = open('https://s3.amazonaws.com/assembled-faces-seed/hulk-logo.jpg')
bruce.cover_photo.attach(io: photo14, filename: 'hulk-logo.jpg')
# http://hdqwalls.com/wallpapers/hulk-marvel-hero-jr.jpg

photo15 = open('https://s3.amazonaws.com/assembled-faces-seed/hawkeye-logo.png')
clint.cover_photo.attach(io: photo15, filename: 'hawkeye-logo.png')
# https://www.pinclipart.com/picdir/middle/142-1424157_hawkeye-3-hawkeye-all-new-hawkeye-5-variant.png

photo16 = open('https://s3.amazonaws.com/assembled-faces-seed/thor-logo.jpg')
thor.cover_photo.attach(io: photo16, filename: 'thor-logo.jpg')
# https://cdn.shopify.com/s/files/1/2783/9160/products/Car_Logo_Lights_Thor_774x620_600x600.jpg?v=1540300900

photo17 = open('https://s3.amazonaws.com/assembled-faces-seed/shield.jpg')
nick.cover_photo.attach(io: photo17, filename: 'shield.jpg')
# https://banner2.kisspng.com/20180421/odw/kisspng-nick-fury-black-widow-thor-s-h-i-e-l-d-marvel-cin-eagle-security-logo-5adbbba25968a7.1852244115243498583662.jpg


# post photos

postphoto1 = open('https://s3.amazonaws.com/assembled-faces-seed/ironman-post.jpg')
post2.photo.attach(io: postphoto1, filename: 'ironman-post.jpg')
# FROM {/* Image sourced from: https://www.instagram.com/p/Bw9nt8mnMGb/ */}

# other photos

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