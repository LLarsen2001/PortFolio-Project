class CreateJobs < ActiveRecord::Migration[7.0]
  def change
    create_table :jobs do |t|
      t.string :jobname
      t.belongs_to :company, null: false, foreign_key: true
      t.integer :salary
      t.text :description
      t.boolean :remote
      t.text :location
      t.integer :user_id
      t.boolean :isFilled

      t.timestamps
    end
  end
end
