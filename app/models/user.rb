class User < ApplicationRecord
    has_secure_password
    # associations

    #validations
    validates :email, presence: true, uniqueness: true
end
