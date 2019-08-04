json.post do
    json.set! @post.id do 
        json.partial! 'api/posts/post', post: @post
    end
end


json.author do 
    json.set! @post.author_id do
        json.partial! 'api/users/user'
    end
end

json.extract! @post, :comments