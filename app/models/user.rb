class User < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :restaurants, through: :reviews


  validates :name, :username, :email, :password, presence: true, on: :create
  validates_uniqueness_of :username, :email
  has_secure_password
end
