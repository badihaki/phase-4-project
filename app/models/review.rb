class Review < ApplicationRecord
    # associations
    belongs_to :user
    belongs_to :game

    # validations
    validates :game_id, presence: true
    validates :user_id, presence: true
    validates :score, presence: true, numericality: { in: 1...6 }
    validates :comment, presence: true,  length: { minimum: 10 }

end
