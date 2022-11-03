class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :nickname, :bio, :filtered_game_list

  # associations
  has_many :reviews, dependent: :destroy
  has_many :games, through: :reviews
end
