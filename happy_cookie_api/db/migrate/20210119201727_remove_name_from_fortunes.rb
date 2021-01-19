class RemoveNameFromFortunes < ActiveRecord::Migration[6.1]
  def change
    remove_column :fortunes, :name, :string
  end
end
