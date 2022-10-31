class User < ApplicationRecord
    has_secure_password
    
    # associations
    has_many :reviews, dependent: :destroy
    has_many :games, through: :reviews

    #validations
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true
    validates :password_confirmation, presence: true
    validates :nickname, presence: true
end
