class WalksController < ApplicationController
  before_action :set_dog, only: [:new]
  before_action :set_walk, only: [:show, :edit, :update, :destroy]

  # GET /walks
  # GET /walks.json
  def index
    @walks = Walk.all
  end

  # GET /walks/1
  # GET /walks/1.json
  def show
  end

  # GET /walks/new
  def new
    @walk = Walk.new
    @walk.requested_at = 24.hours.from_now
    @walk.dog = @dog
  end

  # GET /walks/1/edit
  def edit
  end

  # POST /walks
  # POST /walks.json
  def create
    @walk = Walk.new(walk_params)

    respond_to do |format|
      if @walk.save
        format.html { redirect_to @walk, notice: 'Walk was successfully created.' }
        format.json { render :show, status: :created, location: @walk }
      else
        format.html { render :new }
        format.json { render json: @walk.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /walks/1
  # PATCH/PUT /walks/1.json
  def update
    respond_to do |format|
      if @walk.update(walk_params)
        format.html { redirect_to @walk, notice: 'Walk was successfully updated.' }
        format.json { render :show, status: :ok, location: @walk }
      else
        format.html { render :edit }
        format.json { render json: @walk.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /walks/1
  # DELETE /walks/1.json
  def destroy
    @walk.destroy
    respond_to do |format|
      format.html { redirect_to walks_url, notice: 'Walk was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_walk
      @walk = Walk.find(params[:id])
    end

    def set_dog
      @dog = Dog.find(params[:dog_id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def walk_params
      params.require(:walk).permit(:name, :requested_at, :finished_at, :dog_id, :walker_id)
    end
end
