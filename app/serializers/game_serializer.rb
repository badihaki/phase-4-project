class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :genre, :description

  has_many :groups
  has_many :users, through: :groups
end
