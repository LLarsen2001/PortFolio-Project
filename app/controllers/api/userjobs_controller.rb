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
                    created_by: @userjob.job.user_id,
                    description: @userjob.job.description,
                    email: @user.email,
                    id: @userjob.id,
                    job_id: @userjob.job_id,
                    jobname:@userjob.job.jobname,
                    location: @userjob.job.location,
                    remote: @userjob.job.remote,
                    salary: @userjob.job.salary,
                    status: @userjob.status,
                    user_id:@user.id,
                    created_at:@userjob.created_at,
                    updated_at:@userjob.updated_at
        }
    else
            render json: @userjob.errors.full_message, status: 422
        end
    end

    def create
        puts @user
        @userjob = @user.userjobs.create(userjob_params)
        if(@userjob.save)
            render json: {
                about: @userjob.job.company.about,
                baselocation: @userjob.job.company.baselocation,
                company_id: @userjob.job.company_id,
                companyname:@userjob.job.company.companyname,
                created_by: @userjob.job.user_id,
                description: @userjob.job.description,
                email: @user.email,
                id: @userjob.id,
                job_id: @userjob.job_id,
                jobname:@userjob.job.jobname,
                location: @userjob.job.location,
                remote: @userjob.job.remote,
                salary: @userjob.job.salary,
                status: @userjob.status,
                user_id:@user.id,
                created_at:@userjob.created_at,
                updated_at:@userjob.updated_at
            }
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
        params.require(:userjob).permit(:status, :job_id)
    end

  

end