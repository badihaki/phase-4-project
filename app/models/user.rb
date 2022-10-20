class User < ApplicationRecord
    has_secure_password
    
    # associations
    has_many :reviews, dependent: :destroy
    has_many :games, through: :reviews

    #validations
    validates :email, presence: true, uniqueness: true
end
