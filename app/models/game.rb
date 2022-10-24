class Game < ApplicationRecord
    # associations
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews
    # validations
    validates :name, presence: true, uniqueness: true
    validates :genre, presence: true

    def aggregate_score
        if self.reviews.count > 0
            self.reviews.reduce(0){ |sum, review| sum+review.score } / self.reviews.count
        else
            "No reviews yet"
        end
    end

end
