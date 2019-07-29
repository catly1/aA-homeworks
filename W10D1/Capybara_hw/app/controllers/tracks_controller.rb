class TracksController < ApplicationController
   def index
        @tracks = Track.all
        render :index
    end

    def new
        @track = Track.new
        render :new
    end

    def create
        @track = Track.new(track_params)
        if @track.save
            redirect_to album_url(@track.album_id)
        else
            flash.now[:errors] = @track.errors.full_messages
            render :new
        end
    end

    def edit
        @track = Track.find(params[:id])
        render :edit 
    end

    def update
        @track = Track.find(params[:id])
        if @track.update_attributes(track_params)
            redirect_to album_url(@track.album_id)
        else
            flash.now[:errors] = @track.errors.full_messages
            render :edit
        end
    end

    def show
        @track = Track.find(params[:id])
        render :show
    end

    def destroy
        track = Track.find(params[:id])
        track.destroy
        redirect_to album_url(track.album_id)
    end


    private
    def track_params
        params.require(:track).permit(:title, :track_number, :album_id, :ord, :regular, :lyrics)
    end
end
