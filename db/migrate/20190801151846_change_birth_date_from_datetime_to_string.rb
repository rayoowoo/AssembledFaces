class ChangeBirthDateFromDatetimeToString < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :birth_date, :date
  end
end
