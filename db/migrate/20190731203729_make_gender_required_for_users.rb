class MakeGenderRequiredForUsers < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :gender, false, "Male"
  end
end
