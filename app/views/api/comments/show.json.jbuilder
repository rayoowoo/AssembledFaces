json.set! @comment.id do 
    json.extract! @comment, :id, :author_id, :post_id, :parent_comment_id, :photo
end