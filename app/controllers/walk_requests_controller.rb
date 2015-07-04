class WalkRequestsController < ApplicationController

  before_action :set_walk
  before_action :set_friends

  def create
    @walk_request = WalkRequest.create(walk_request_params)
    if (@walk_request.valid?)
      redirect_to root_path
      return
    else
      render 'new'
    end
  end

  def new
    @walk_request = WalkRequest.new
    @walk_request.walk = @walk
    @walk_request.contact_method = 'Email'
  end

  private

  def set_friends
    @friends = Owner.last(25) - [current_user]
  end

  def set_walk
    @walk = Walk.find(params[:walk_id])
  end

  def walk_request_params
    params.require(:walk_request).permit(:contact_method, :walker_id, :walk_id)
  end

end
