json.post do
    json.set! @post.id do 
        json.partial! 'api/posts/post', post: @post
    end
end


json.author do 
    json.set! @post.author_id, @post.author
end

json.extract! @post, :comments