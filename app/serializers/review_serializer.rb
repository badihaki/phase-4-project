class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :game_id, :score, :comment
end
