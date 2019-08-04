json.extract! comment, :id, :author_id, :post_id, :parent_comment_id, :body
# json.photoUrl url_for(@comment.photo)

if comment.created_at.strftime('%-B,%-d,%-Y') == (Time.now - 1.day).strftime('%-B,%-d,%-Y')
    json.created_at({date: 'Yesterday',
        time: comment.created_at.strftime('%-I:%M%p')})
elsif comment.created_at.strftime('%-B,%-d,%-Y') == Time.new.strftime('%-B,%-d,%-Y')
    json.created_at({date: 'Today',
        time: comment.created_at.strftime('%-I:%M%p')})
elsif comment.created_at.strftime('%-Y') == Time.new.year.to_s
    json.created_at({date: comment.created_at.strftime('%-B %-d'),
        time: comment.created_at.strftime('%-I:%M%p')})
else
    json.created_at({date: comment.created_at.strftime('%-B %-d, %Y'),
        time: comment.created_at.strftime('%-I:%M%p')})
end