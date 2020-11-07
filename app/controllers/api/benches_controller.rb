class Api::BenchesController < ApplicationController
  def show
    @bench = Bench.find_by(id: params[:id])
    if @bench
      render :show
    else
      render json: "Bench not found", status: 404
    end 
  end 
end
