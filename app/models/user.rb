class User < ApplicationRecord
    has_secure_password
    
    # associations
    has_many :games
    has_many :group_requests, dependent: :destroy
    has_many :groups, through: :group_requests

    #validations
    validates :email, presence: true, uniqueness: true
end
