class CreateInterventions < ActiveRecord::Migration[5.2]
  def change
    create_table :interventions do |t|
      t.string :startdate
      t.string :endate 
      t.string :result 
      t.string :report
      t.string :status  
      t.timestamps
    end
  end
end
