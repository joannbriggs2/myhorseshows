class CreateHorseshows < ActiveRecord::Migration[6.0]
  def change
    create_table :horseshows do |t|
      t.string :venue
      t.string :website
      t.string :eventtype
      t.string :date
      t.string :time

      t.timestamps
    end
  end
end
