class HorseshowsController < ApplicationController
  before_action :set_horseshow, only: [:show, :update, :destroy]

  # GET /horseshows
  def index
    @horseshows = Horseshow.all

    render json: @horseshows
  end

  # GET /horseshows/1
  def show
    render json: @horseshow
  end

  # POST /horseshows
  def create
    @horseshow = Horseshow.new(horseshow_params)

    if @horseshow.save
      render json: @horseshow, status: :created, location: @horseshow
    else
      render json: @horseshow.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /horseshows/1
  def update
    if @horseshow.update(horseshow_params)
      render json: @horseshow
    else
      render json: @horseshow.errors, status: :unprocessable_entity
    end
  end

  # DELETE /horseshows/1
  def destroy
    @horseshow.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_horseshow
      @horseshow = Horseshow.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def horseshow_params
      params.require(:horseshow).permit(:venue, :website, :eventtype, :date, :time)
    end
end
