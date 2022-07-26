class CreateDocuments < ActiveRecord::Migration[7.0]
  def change
    create_table :documents do |t|
      t.string :title
      t.string :url
      t.belongs_to :userjob, null: false, foreign_key: true

      t.timestamps
    end
  end
end
