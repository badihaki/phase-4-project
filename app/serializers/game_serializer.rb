class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :genre, :description
end
