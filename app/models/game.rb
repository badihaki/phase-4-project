class Game < ApplicationRecord
    # associations
    # validations
    validates :name, presence: true, uniqueness: true
    validates :genre, presence: true
end
