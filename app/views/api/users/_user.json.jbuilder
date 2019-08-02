json.extract! user, :id, :email, :first_name, :last_name, :birth_date, :gender, :workplace, :education, :hometown, :current_city, :location, :bio
json.photoUrl url_for(user.photo)