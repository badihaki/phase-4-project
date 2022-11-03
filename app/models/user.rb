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

    def filtered_game_list
        games_list = []
        # I need to remove multiple entries when returning the games_list
        # Can I filter? or should I map?
        self.games.each do |game|
            games_list << game if !games_list.include? game
        end
        return games_list
    end
end
