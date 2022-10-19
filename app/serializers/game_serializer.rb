class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :genre, :description

  has_many :group_requests
  has_many :groups, through: :group_requests
  has_many :users, through: :group_requests
end
