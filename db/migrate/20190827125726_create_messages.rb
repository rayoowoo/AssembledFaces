class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    drop_table :messages
    drop_table :chat
    drop_table :subscriptions
  end
end
