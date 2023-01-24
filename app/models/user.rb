class User < ApplicationRecord


    validates :name, :username, :email, :password, presence: true, on: :create
    validates_uniqueness_of :username, :email
    has_secure_password
end
