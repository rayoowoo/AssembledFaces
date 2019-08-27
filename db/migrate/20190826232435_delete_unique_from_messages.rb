class DeleteUniqueFromMessages < ActiveRecord::Migration[5.2]
  def change
    remove_index :messages, column: [:user_id, :chat_id]
  end
end
