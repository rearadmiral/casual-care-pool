class DogsController < ApplicationController

  def create
    current_user.dogs.create!(dog_params)
    head 200
  end

  private

  def dog_params
    params.require(:dog).permit(:name, :birthdate, :photo)
  end

end
