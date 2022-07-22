class Api::UsersController < ApplicationController

  def update_image
    file = params[:file]
    user = User.find(params[:id])
   if file 
      begin
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
        user.image = cloud_image['secure_url']
        
        if user.save
          render json: user
        else
          render json: {
                  errors: user.errors, 
                  message:'Error trying to save user'},
                status: 422
         end 
      rescue => e
         # error occured uploading to cloudinary 
         render json: {errors: e, message:'Error uploading to cloudinary'}, status: 422
      end
    end
  end
end