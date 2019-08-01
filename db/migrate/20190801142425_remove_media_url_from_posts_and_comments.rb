class RemoveMediaUrlFromPostsAndComments < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :media_url
    remove_column :comments, :media_url
    change_column_null :posts, :body, true
    change_column_null :comments, :body, true
  end
end
