json.posts do 
    @posts.each do |post|
        json.set! post.id do
            json.partial! 'api/posts/post', post: post
        end
    end
end

@posts.each do |post|

    json.comments do 
        post.comments.each do |comment|
            json.set! comment.id do 
                json.partial! 'api/comments/comment', comment: comment
            end
        end
    end

    json.authors do 
        json.set! post.author_id do
            json.partial! 'api/users/login', user: post.author
        end

        post.comments.each do |comment|
            json.set! comment.author_id do 
                json.partial! 'api/users/login', user: comment.author
            end
        end

        post.tagged_users.each do |user|
            json.set! user.id do
                json.partial! 'api/users/login', user: user
            end
        end        
    end

    json.likes do 
        post.likes.each do |like|
            json.set! like.id do
                json.partial! 'api/likes/like', like: like
            end
        end
    end
    
    json.tags do
        post.tags.each do |tag|
            json.set! tag.id do
                json.partial! 'api/tags/tag', tag: tag
            end
        end
    end
end
