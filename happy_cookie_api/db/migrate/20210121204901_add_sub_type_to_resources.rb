class AddSubTypeToResources < ActiveRecord::Migration[6.1]
  def change
    add_column :resources, :subType, :string
  end
end
