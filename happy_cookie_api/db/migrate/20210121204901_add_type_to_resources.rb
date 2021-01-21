class AddTypeToResources < ActiveRecord::Migration[6.1]
  def change
    add_column :resources, :type, :string
  end
end
