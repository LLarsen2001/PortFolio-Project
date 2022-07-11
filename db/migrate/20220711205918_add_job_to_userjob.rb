class AddJobToUserjob < ActiveRecord::Migration[7.0]
  def change
    add_reference :userjobs, :job, null: false, foreign_key: true
  end
end
