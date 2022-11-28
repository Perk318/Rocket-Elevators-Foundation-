class Column < ApplicationRecord

    belongs_to :battery
    has_many :elevators
    belongs_to :intervention

end
