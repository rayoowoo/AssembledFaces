json.extract! post, :id, :body, :author_id, :user_id

if post.created_at.strftime('%-B,%-d,%-Y') == (Time.now - 1.day).strftime('%-B,%-d,%-Y')
    json.created_at({date: 'Yesterday',
        time: post.created_at.strftime('%-I:%M%p')})
elsif post.created_at.strftime('%-B,%-d,%-Y') == Time.new.strftime('%-B,%-d,%-Y')
    json.created_at({date: 'Today',
        time: post.created_at.strftime('%-I:%M%p')})
elsif post.created_at.strftime('%-Y') == Time.new.year.to_s
    json.created_at({date: post.created_at.strftime('%-B %-d'),
        time: post.created_at.strftime('%-I:%M%p')})
else
    json.created_at({date: post.created_at.strftime('%-B %-d, %Y'),
        time: post.created_at.strftime('%-I:%M%p')})
end

if post.photo.attached?
    json.photoUrl url_for(post.photo)
end