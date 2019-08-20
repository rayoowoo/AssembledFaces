class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.integer :user_id, null: false
      t.integer :post_id, null: false
      t.timestamps
    end
    add_index :tags, :user_id
    add_index :tags, :post_id
    add_index :tags, [:user_id, :post_id], unique: true
  end
end
