class CreateChatroom < ActiveRecord::Migration[5.2]
  def change
    create_table :chatrooms do |t|
      t.string :topic
      t.string :slug
    end
  end
end
