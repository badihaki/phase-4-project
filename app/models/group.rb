class Group < ApplicationRecord
    # associations
    # belongs_to :game
    # has_many :group_requests, dependent: :destroy
    # has_many :users, through: :group_requests
    has_many :group_requests, dependent: :destroy
    has_many :games, through: :group_requests
    has_many :users, through: :group_requests
    # validations
    validates :name, presence: true
    validates :message, presence: true
end
