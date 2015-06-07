class DogsController < ApplicationController

  before_filter :require_dog, except: [:create]

  def show

  end

  def create
    current_user.dogs.create!(dog_params)
    head 200
  end

  def update
    @dog.update_attributes!(dog_params)
    head 200
  end

  private

  def require_dog
    params.require(:id)
    @dog = Dog.find(params[:id])
  end

  def dog_params
    params.require(:dog).permit(:name, :birthdate, :photo, :breed, :weight_in_pounds)
  end

end
