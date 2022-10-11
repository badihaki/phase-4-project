class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :nickname, :bio
end
