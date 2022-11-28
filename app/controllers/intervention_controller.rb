class InterventionController < ApplicationController
    def get_building_by_customer
        @building = Building.where("customer_id = ?", params[:customer_id])   
        respond_to do |format|
            format.json {render :json => @building }
        end 
    end
    def building_search
        if params[:customer].present? && params[:customer].strip != ""
          @building = Building.where("customer_id = ?", params[:customer])
        else
          @building = Building.all
        end
      end

    def get_battery_by_building
        @battery = Battery.where("building_id = ?", params[:building_id])
        respond_to do |format|
            format.json {render :json => @battery }
        end
    end
    def battery_search
        if params[:building].present? && params[:building].strip != ""
          @battery = Battery.where("building_id = ?", params[:building])
        else
          @battery = Battery.all
        end
      end
   
    def get_column_by_battery
        @column = Column.where("battery_id = ?", parasms[:battery_id])
        respond_to do |format|
            format.json {render :json => @column }
        end
    end
    def column_search
        if params[:battery].present? && params[:battery].strip != ""
          @column = Column.where("battery_id = ?", params[:battery])
        else
          @column = Column.all
        end
      end
    

    def get_elevator_by_column
        @elevator = Elevator.where("column_id = ?", params[:column_id])
        respond_to do |format|
            format.json {render :json => @elevator }
        end
    end   
    def elevator_search
        if params[:column].present? && params[:column].strip != ""
          @elevator = Elevator.where("column_id = ?", params[:column])
        else
          @elevator = Elevator.all
        end
      end 

end
