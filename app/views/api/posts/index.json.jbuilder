json.posts do 
    @posts.each do |post|
        json.set! post.id do
            json.partial! 'api/posts/post', post: post
        end
    end
end

@posts.each do |post|
    json.extract! post, :comments
    json.authors do 
        json.set! post.author_id, post.author
    end
end