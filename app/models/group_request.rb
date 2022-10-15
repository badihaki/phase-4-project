class GroupRequest < ApplicationRecord
    # associations
    belongs_to :group
    belongs_to :user
    belongs_to :game
    # validations
    validates :game_id, presence: true
    validates :user_id, presence: true
    validates :request_message, presence: true,  length: { minimum: 20 }
end
