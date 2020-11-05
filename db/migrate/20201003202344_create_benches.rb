class CreateBenches < ActiveRecord::Migration[5.2]
  def change
    create_table :benches do |t|
      t.string :name, null:false
      t.text :description, null:false
      t.float :lat
      t.float :lng
      t.string :material, null:false, default:"wood"
      t.boolean :wifi, null:false, default:false
      t.boolean :scenic, null:false, default:false
      t.integer :seats
      t.boolean :layable, null:false, default:false
      t.boolean :shaded, null:false, default:false
      t.integer :approach, null:false, default:1 # will be rated 1-5

      t.timestamps
    end
  end
end
