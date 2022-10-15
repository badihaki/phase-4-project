class CreateGroupRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :group_requests do |t|
      t.integer :game_id
      t.integer :user_id
      t.string :request_message

      t.timestamps
    end
  end
end
