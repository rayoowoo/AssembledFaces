class CreateNewMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :body, null: false
      t.integer :user_id, null: false
      t.integer :chat_id, null: false
      t.timestamps
    end
    add_index :messages, :user_id
    add_index :messages, :chat_id
    add_index :messages, [:user_id, :chat_id], unique: true
  end
end
