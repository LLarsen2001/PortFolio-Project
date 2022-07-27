class Api::DocumentsController < ApplicationController
 

  def upload_document
    file = params[:file]
    # binding.pry
    if file 
      begin
        @document = Document.new(userjob_id:params[:id])
        
        cloud_file = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
        @document.url = cloud_file['secure_url']
        @document.title = file.original_filename
        if @document.save
          
          render json: @document
        else
          render json: {
                  errors: @document.errors, 
                  message:'Error trying to save file'},
                status: 422
         end 
      rescue => e
         # error occured uploading to cloudinary 
         render json: {errors: e, message:'Error uploading to cloudinary'}, status: 422
      end
    end
  end

  private
  
  
  def document_params
      params.permit(:title, :file, :id)
  end
end
