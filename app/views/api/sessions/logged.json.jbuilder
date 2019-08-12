json.user do
    json.set! @user.id do
        json.partial! 'api/users/login', user: @user
    end
end