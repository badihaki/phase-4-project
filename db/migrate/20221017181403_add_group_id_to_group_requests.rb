class AddGroupIdToGroupRequests < ActiveRecord::Migration[7.0]
  def change
    add_column :group_requests, :group_id, :integer
  end
end
