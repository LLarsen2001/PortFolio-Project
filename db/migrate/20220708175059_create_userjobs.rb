class CreateUserjobs < ActiveRecord::Migration[7.0]
  def change
    create_table :userjobs do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :status

      t.timestamps
    end
  end
end
