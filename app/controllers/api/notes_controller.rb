class Api::NotesController < ApplicationController
  before_action :set_userjob

  def index
    render json: @userjob.notes.all
  end

  def create
    @note = @userjob.notes.new(note_params)
    if(@note.save)
      render json: @note
    else
      render json: @note.errors.full_message, status: 422
    end
  end

  private
    
  def set_userjob 
      @userjob =  Userjob.find(params[:id])
  end
  
  
  def note_params
      params.require(:note).permit(:title, :body, :userjob_id)
  end
end
