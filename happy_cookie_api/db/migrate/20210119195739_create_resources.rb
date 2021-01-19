class CreateResources < ActiveRecord::Migration[6.1]
  def change
    create_table :resources do |t|
      t.string :fortune
      t.integer :fortune_id

      t.timestamps
    end
  end
end
