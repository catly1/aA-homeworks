class Changecolumn < ActiveRecord::Migration[5.2]
  def change
    rename_column :albums, :type, :live
  end
end
