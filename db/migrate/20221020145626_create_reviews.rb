class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :game_id
      t.integer :score
      t.string :comment

      t.timestamps
    end
  end
end
