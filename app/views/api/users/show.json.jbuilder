json.user do
    json.set! @user.id do
        json.partial! 'api/users/user', user: @user

        if @user.cover_photo.attached?
            json.coverUrl url_for(@user.cover_photo)
        end

        if @user.photos.attached?
            json.photoUrls @user.photos.map { |file| url_for(file) }
        end

        json.friendIds @user.friend_ids
    end
end

json.friendships do 
    @user.friend_requests.each do |request|
        json.partial! 'api/friendships/friendship', friendship: request
    end
end

json.friends do 
    @user.friends.each do |friend|
        json.set! friend.id do
            json.extract! friend, :id
            json.firstName friend.first_name
            json.lastName friend.last_name
            json.friendIds friend.friend_ids
            if friend.profile_photo.attached? 
                json.photoUrl url_for(friend.profile_photo)
            end
        end
    end
    @user.received_requests.each do |person|
        json.set! person.id do
            json.extract! person, :id
            json.firstName person.first_name
            json.lastName person.last_name
            json.friendIds person.friend_ids
            if person.profile_photo.attached? 
                json.photoUrl url_for(person.profile_photo)
            end
        end
    end
end