class CreateCompanies < ActiveRecord::Migration[7.0]
  def change
    create_table :companies do |t|
      t.string :companyname
      t.text :baselocation
      t.text :about

      t.timestamps
      
    end
  end
end
