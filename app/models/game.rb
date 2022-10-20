class Game < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews
    # validations
    validates :name, presence: true, uniqueness: true
    validates :genre, presence: true
end
