json.set! @comment.id do 
    json.extract! @comment, :id, :author_id, :post_id, :parent_comment_id, :created_at
    json.photoUrl url_for(@comment.photo)
end