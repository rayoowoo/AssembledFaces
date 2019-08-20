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
            json.extract! post.author, :id, :first_name, :last_name

            if post.author.profile_photo.attached? 
                    json.photoUrl url_for(post.author.profile_photo)
                end
        end
        post.comments.each do |comment|
            json.set! comment.author_id do 
                json.extract! comment.author, :id, :first_name, :last_name

                if comment.author.profile_photo.attached? 
                    json.photoUrl url_for(comment.author.profile_photo)
                end
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
end
