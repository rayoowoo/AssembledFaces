json.extract! post, :body, :author_id, :user_id, :comments
json.photoUrl url_for(post.photo)