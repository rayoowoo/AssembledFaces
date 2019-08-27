class CreateChat < ActiveRecord::Migration[5.2]
  def change
    create_table :chats do |t|
      t.string :identifier, null: false, unique: true, case_sensitive: false
      t.timestamps
    end
  end
end
