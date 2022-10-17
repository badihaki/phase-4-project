class Game < ApplicationRecord
    # associations
    has_many :groups, dependent: :destroy
    has_many :users, through: :groups
    # validations
    validates :name, presence: true, uniqueness: true
    validates :genre, presence: true
end
