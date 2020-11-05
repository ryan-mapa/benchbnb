class Api::BenchesController < ApplicationController
  def show
    @bench = Bench.find_by(id: params[:id])
  end 
end
