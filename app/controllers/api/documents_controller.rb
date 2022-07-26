class Api::DocumentsController < ApplicationController
  before_action :set_userjob

  def upload_document
    file = params[:file]
    if file 
      begin
        cloud_file = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
        url = cloud_file['secure_url']
        if file.save
          render json: file
        else
          render json: {
                  errors: file.errors, 
                  message:'Error trying to save file'},
                status: 422
         end 
      rescue => e
         # error occured uploading to cloudinary 
         render json: {errors: e, message:'Error uploading to cloudinary'}, status: 422
      end
    end
    
    @document = @userjob.documents.new(document_params, url)
  end

  private
    
  # def set_user
  #     @user = User.find(params[:user_id])
  # end
  
  def set_userjob 
      @userjob =  Userjob.find(params[:id])
  end
  
  
  def document_params
      params.require(:document).permit(:title, :url, :userjob_id)
  end
end
