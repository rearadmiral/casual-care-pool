class DashboardsController < ApplicationController

  before_filter :require_owner

  def show

  end

  private

  def require_owner
    @owner = Owner.first
    unless @owner
      head 404
      false
    end
  end

end
