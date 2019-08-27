class AddUserIdAndChatIdToMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :user_id, :integer
    add_column :messages, :chat_id, :integer
    add_index :messages, :user_id
    add_index :messages, :chat_id
    add_index :messages, [:user_id, :chat_id], unique: true
  end
end
