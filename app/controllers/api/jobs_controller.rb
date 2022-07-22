class Api::JobsController < ApplicationController
  # before_action :authenticate_user!
  before_action :set_job, only: [:show, :update, :destroy]

  def index
    render json: Job.availableJobs
  end

  def show
    render json: @job
  end

  def create 
    newJob = Job.new(job_params)
    if(newJob.save)
        render json: newJob
    else
        render json: newJob.errors.full_messages, status: 422
    end
  end

  def update
    if(@job.update(job_params))
      render json: @job
    else
      render json: @job.errors.full_message, status: 422
    end
  end

  def destroy
    render json: @job.destroy
  end

  private

  def set_job
    @job = Job.find(params[:job_id])
  end
  
  def job_params 
    params.require(:job).permit(:jobname, :salary, :description, :remote, :location, :isFilled, :user_id, :company_id)
  end

end
