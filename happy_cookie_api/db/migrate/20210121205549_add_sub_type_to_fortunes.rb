class AddSubTypeToFortunes < ActiveRecord::Migration[6.1]
  def change
    add_column :fortunes, :subType, :string
  end
end
