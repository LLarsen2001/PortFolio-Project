class Api::UserjobsController < ApplicationController
    before_action :set_user, except: [:boarddata]
    before_action :set_userjob, only: [:show, :update, :destroy]
    
    def boarddata
        render json: Userjob.available(params[:user_id])
    end

    def index 
        render json: @user.userjobs
    end
    
    def show
        render json: @userjob
    end

    def update
        if(@userjob.update(userjob_params))
            render json: {
about: @userjob.job.company.about,
baselocation: @userjob.job.company.baselocation,
company_id: @userjob.job.company_id,
companyname:@userjob.job.company.companyname,
# created_by: @userjob.job.created_by,
description: @userjob.job.description,
email: @user.email,
id: @userjob.id,
job_id: @userjob.job_id,
jobname:@userjob.job.jobname,
location: @userjob.job.location,
remote: @userjob.job.remote,
salary: @userjob.job.salary,
status: @userjob.status,
user_id:@user.id
}
        else
            render json: @userjob.errors.full_message, status: 422
        end
    end

    def create
        @userjob = @user.userjobs.new(params.require(:userjob).permit(:status, :job_id))
        if(@userjob.save)
            render json: @userjob
        else
            render json: @userjob.errors.full_message, status: 422
        end
    end

    def destroy
        render json: @userjob.destroy
    end

    private
    
    def set_user
        @user = User.find(params[:user_id])
    end
    
    def set_userjob 
        @userjob =  @user.userjobs.find(params[:id])
    end
    
    
    def userjob_params 
        params.require(:userjob).permit(:status)
    end

  

end