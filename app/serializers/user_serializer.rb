class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :nickname, :bio

  # associations
  has_many :reviews, dependent: :destroy
  has_many :games, through: :reviews
end
