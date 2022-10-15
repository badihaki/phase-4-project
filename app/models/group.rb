class Group < ApplicationRecord
    # associations
    belongs_to :game
    has_many :group_requests
    has_many :players, through: :group_requests
    # validations
    validates :name, presence: true
    validates :message, presence: true
end
