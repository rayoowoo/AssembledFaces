class AddColumnsToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :location, :string
    add_column :users, :workplace, :string
    add_column :users, :education, :string
    add_column :users, :current_city, :string
    add_column :users, :hometown, :string
    add_column :users, :bio, :text
  end
end
