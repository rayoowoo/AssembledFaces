class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.integer :requester_id, null: false
      t.integer :requested_id, null: false
      t.string :status, null: false, default: "pending"
      t.timestamps
    end
    add_index :friendships, :requester_id
    add_index :friendships, :requested_id
    add_index :friendships, [:requester_id, :requested_id], unique: true
  end
end
