class User < ApplicationRecord
    has_secure_password
    
    # associations
    has_many :group_requests, dependent: :destroy
    has_many :groups, through: :group_requests
    has_many :games, through: :group_requests

    #validations
    validates :email, presence: true, uniqueness: true
end
