class ChangePasswordDigestToBeStringInUsers < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :password, :string, null: false
  end
end
