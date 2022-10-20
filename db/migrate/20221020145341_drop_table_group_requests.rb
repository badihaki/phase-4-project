class DropTableGroupRequests < ActiveRecord::Migration[7.0]
  def change
    drop_table :group_requests
  end
end
