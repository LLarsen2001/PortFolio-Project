class Api::CompaniesController < ApplicationController

  def index
    render json: Company.getCompanyNamesAndIDs
  end

  def create 
    newCompany = Company.new(company_params)
    if(newCompany.save)
        render json: newCompany
    else
        render json: newCompany.errors.full_messages, status: 422
    end
  end

  private

  def company_params 
    params.require(:company).permit(:companyname, :baselocation, :about)
  end
end
