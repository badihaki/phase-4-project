class Game < ApplicationRecord
    # associations
    # has_many :groups, dependent: :destroy
    # has_many :users, through: :groups
    has_many :group_requests, dependent: :destroy
    has_many :groups, through: :group_requests
    has_many :users, through: :group_requests
    # validations
    validates :name, presence: true, uniqueness: true
    validates :genre, presence: true
end
