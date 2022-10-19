class RemoveGameIdFromGroups < ActiveRecord::Migration[7.0]
  def change
    remove_column :groups, :game_id, :integer
  end
end
