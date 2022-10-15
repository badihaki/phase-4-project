class GroupSerializer < ActiveModel::Serializer
  attributes :id, :name, :message, :game_id
end
