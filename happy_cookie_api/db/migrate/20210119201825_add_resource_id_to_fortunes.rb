class AddResourceIdToFortunes < ActiveRecord::Migration[6.1]
  def change
    add_column :fortunes, :resource_id, :integer
  end
end
