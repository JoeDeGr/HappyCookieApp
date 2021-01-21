class AddTypeToFortunes < ActiveRecord::Migration[6.1]
  def change
    add_column :fortunes, :type, :string
  end
end
