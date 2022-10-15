class GroupRequestSerializer < ActiveModel::Serializer
  attributes :id, :game_id, :user_id, :request_message
end
