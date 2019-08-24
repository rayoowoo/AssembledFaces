json.user do
    json.set! @user.id do
        json.partial! 'api/users/user', user: @user

        if @user.cover_photo.attached?
            json.coverUrl url_for(@user.cover_photo)
        end

        if @user.photos.attached?
            json.photoUrls @user.photos.map { |file| url_for(file) }
        end

        json.friend_ids @user.friend_ids
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
            json.extract! friend, :id, :first_name, :last_name, :friend_ids
            if friend.profile_photo.attached? 
                json.photoUrl url_for(friend.profile_photo)
            end
        end
    end
    @user.received_requests.each do |person|
        json.set! person.id do
            json.extract! person, :id, :first_name, :last_name, :friend_ids
            if person.profile_photo.attached? 
                json.photoUrl url_for(person.profile_photo)
            end
        end
    end
end