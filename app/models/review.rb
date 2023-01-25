class Review < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :restaurant

  validates :comment, presence: true
end
