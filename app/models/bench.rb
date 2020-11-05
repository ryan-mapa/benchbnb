class Bench < ApplicationRecord
  validates :name, 
            :description, 
            :material, 
            :approach, presence: true
  # additional validations needed for lat, lng, seats
  validates :wifi, :scenic, :layable, :shaded, inclusion: [true, false]
  validates :approach, inclusion: [1,2,3,4,5]
  
  before_validation :ensure_defaults

  def ensure_defaults
    self.wifi ||= false
    self.material ||= "wood"
    self.scenic ||= false
    self.layable ||= true
    self.shaded ||= false
    self.approach ||= 1
  end 
end
