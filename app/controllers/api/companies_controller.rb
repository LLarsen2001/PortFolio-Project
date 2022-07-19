class Api::CompaniesController < ApplicationController

  def index
    render json: Company.getCompanyNamesAndIDs
  end
end
