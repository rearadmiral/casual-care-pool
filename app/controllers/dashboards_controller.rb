class DashboardsController < ApplicationController

  before_filter :require_owner

  def show
    @incoming_walk_requests =
      WalkRequest.where(walker: current_user)
  end

  private

  def require_owner
    @owner = current_user
    unless @owner
      head 404
      false
    end
  end

end
