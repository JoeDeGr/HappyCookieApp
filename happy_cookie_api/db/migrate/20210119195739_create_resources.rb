class CreateResources < ActiveRecord::Migration[6.1]
  def change
    create_table :resources do |t|
      t.string :fortune

      t.timestamps
    end
  end
end
