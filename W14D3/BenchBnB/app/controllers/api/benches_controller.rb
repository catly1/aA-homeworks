class Api::BenchesController < ApplicationController
  def index
      @benches = []

    if params[:bounds]
      @benches = Bench.in_bounds(params[:bounds])
    end
  end

  def create
      @bench = Bench.new(bench_params)
      
      if @bench.save
        render :show
      else  
        render json: @bench.errs.full_messages, status: 422
      end
  end

  private
  def bench_params
    params.require(:bench).permit(:description,:lng,:lat)
  end
end
