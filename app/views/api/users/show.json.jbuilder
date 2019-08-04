json.user do
    json.set! @user.id do
        json.partial! 'api/users/user', user: @user
    end
end

json.posts do
    @user.timeline_posts.each do |post|
        json.set! post.id do
            json.partial! 'api/posts/post', post: post
        end
    end
end

json.comments do 
    @user.timeline_posts.each do |post|
        json.extract! post, :comments
    end
end