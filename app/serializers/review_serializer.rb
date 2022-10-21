class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :score, :comment

  belongs_to :user
  belongs_to :game
end
