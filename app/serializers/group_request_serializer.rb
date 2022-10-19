class GroupRequestSerializer < ActiveModel::Serializer
  attributes :id, :game_id, :user_id, :group_id, :request_message

  belongs_to :group
  belongs_to :user
  belongs_to :game
end
