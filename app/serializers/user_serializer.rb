class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :nickname, :bio

  has_many :games
  has_many :group_requests
  has_many :groups, through: :group_requests
end
