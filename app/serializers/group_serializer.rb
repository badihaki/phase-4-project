class GroupSerializer < ActiveModel::Serializer
  attributes :id, :name, :message

  has_many :group_requests
  has_many :games, through: :group_requests
  has_many :users, through: :group_requests
end
