class Game < ApplicationRecord
    # associations
    has_many :groups
    has_many :users, through: :groups
    # validations
    validates :name, presence: true, uniqueness: true
    validates :genre, presence: true
end
