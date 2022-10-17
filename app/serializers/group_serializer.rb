class GroupSerializer < ActiveModel::Serializer
  attributes :id, :name, :message, :game_id

  belongs_to :game
  has_many :group_requests
  has_many :users, through: :group_requests
end
