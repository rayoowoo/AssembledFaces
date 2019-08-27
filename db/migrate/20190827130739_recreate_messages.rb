class RecreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :content, null: false
      t.integer :chatroom_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :messages, :chatroom_id
    add_index :messages, :user_id
  end
end
