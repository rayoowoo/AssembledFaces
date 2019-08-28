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
            json.extract! post.author, :id
            json.firstName post.author.first_name
            json.lastName post.author.last_name
            json.friendIds post.author.friend_ids
            if post.author.profile_photo.attached? 
                    json.photoUrl url_for(post.author.profile_photo)
                end
        end
        post.comments.each do |comment|
            json.set! comment.author_id do 
                json.extract! comment.author, :id
                json.firstName comment.author.first_name
                json.lastName comment.author.last_name
                json.friendIds comment.author.friend_ids
                if comment.author.profile_photo.attached? 
                    json.photoUrl url_for(comment.author.profile_photo)
                end
            end
        end
        post.tagged_users.each do |user|
            json.set! user.id do
                json.extract! user, :id
                json.firstName user.first_name
                json.lastName user.last_name
                json.friendIds user.friend_ids
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
