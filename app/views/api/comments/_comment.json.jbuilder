json.extract! comment, :id, :body
json.authorId comment.author_id
json.postId comment.post_id
json.parentCommentId comment.parent_comment_id
# json.photoUrl url_for(@comment.photo)

if comment.created_at.strftime('%-B,%-d,%-Y') == (Time.now - 1.day).strftime('%-B,%-d,%-Y')
    json.createdAt({date: 'Yesterday',
        time: comment.created_at.strftime('%-I:%M%p')})
elsif comment.created_at.strftime('%-B,%-d,%-Y') == Time.new.strftime('%-B,%-d,%-Y')
    json.createdAt({date: 'Today',
        time: comment.created_at.strftime('%-I:%M%p')})
elsif comment.created_at.strftime('%-Y') == Time.new.year.to_s
    json.createdAt({date: comment.created_at.strftime('%-B %-d'),
        time: comment.created_at.strftime('%-I:%M%p')})
else
    json.createdAt({date: comment.created_at.strftime('%-B %-d, %Y'),
        time: comment.created_at.strftime('%-I:%M%p')})
end