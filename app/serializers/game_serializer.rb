class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :genre, :description, :aggregate_score

  # associations
  has_many :reviews, dependent: :destroy
  has_many :users, through: :reviews
end
