json.like do
    json.partial! 'api/likes/like', like: @like
end

json.user do 
    json.set! @like.user do
        json.partial! 'api/user/user', user: @like.user
    end
end

if @like.likeable_type == "POST"
    json.post do 
        json.set! @like.likeable_id
            json.partial! 'api/posts/post', post: Post.find(@like.likeable_id)
        end
    end
end