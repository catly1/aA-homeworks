#Carlos
# 1. An object that can run methods.


# 2. self refers to the current object.


# 3. super 


# 
class Jukebox
    def intialize
        @
    end
end


class Playlist

    def intialize
        @list = []
        @current_song = nil
    end

    def queue(song)
        @list << song
    end

    def track
        @list.unshift(@list.pop) 
    end
    
    def moving_thru
        if i.nil?
            @current_song = list[0]
        end
        i = @list.index(@current_song)
        @current_song = @list[i]
    end
end

class Player
    def intialize
        @playlists = []
    end

    def make_playlist
        @playlist << play
    end

end

class Song
    def intialize(name)
        @name
    end
end




#Jon's White board

class P_spot
    attr_reader :spot_num, :car

    def intialize(spot_num, car)
        @spot_num = spot_num
        @car = nil
    end

    def space
        #determine parking space
    end

    def add_car(car)
        @car = car
    end

    def car_leaves
        @car = nil
    end

end

class Car

    def intialize(make,model)
        @make = make 
        @model = model
    end

    def pay 
        # pays for specific spot 
    end
end
class Level

end
class Whole


end


#Carlos
# bfs question

class Node
    def bfs(target, &prc)
        prc ||= {|a,b| a > b}
        queue = [self]

        until queue.empty?
            current = queue.shift

            if prc.call(current.target)
                return current
            end

            current.children.each do |child|
                queue << child
            end
            end
        end
    end
end


class Node
    def dfs(target,&prc)
        raise if prc.nil?
        return nil if self.nil?
        return self if prc.call(self)

        self.children.each do |child|
            child.dfs(target, &prc) if child != target
            return nil if child.children.empty?
        end
    end
end



#Carlos
class Car
    attr_reader :license_plate, :type, :size
    def intialize(license_plate,size,type)
        @license_plate = license_plate
        @size = size
        @type = type
    end

    def park(spot)
        # Car parks in that spot
    end

    def fit(spot)
        # If that car fits the spot
    end

    def leave
        # reset spot to nil
    end
end

class Parking_spot
    attr_reader :location, :size, :type
    def intialize(location,size,type)
        @location = location
        @size = size
        @type = type
        @parked_car = nil
    end

    def spot_filled?
        # should return true or false if the spot is filled
    end

    def fit?
        # if a car can fit
    end

    def park(car)
        # set car into parked_car 
    end

    def unpark
        # resets parked_car
    end
end

class Level
    attr_reader :parking_spot
    def intialize
        @parking_spots = []
    end

    def can_park_her?(car)
        # uses type/size to determine if it can park. 
    end

    def add_parking_spot(parking_spot)
        # fill @parking_spots
    end

    def level_has_space?
        # return false or return the space that has space
    end

end

class Parking_lot
    attr_reader :levels
    def intialize
        @levels = []
    end

    def add_levels
        #fill levels
    end

    def parking_lot_has_space?
        # return false or return the level that has space
    end
end


#Jon

class Jukebox

    def intialize(songs, playlists, users)
        
    end


end


class Playlist

    def intialize(queue = [], song = nil)
        @queue = queue
        @song = song
        @all_songs = queue
    end

    def skip_song
        @queue.shift
    end

    def add_song(song)
        @all_songs << @queue.push(song)
    end

    def load_playlist(playlist)
        @queue = playlist
    end

    def go_back
        queue << @all_songs.pop 
    end

end

class Player
    
    def intialize(name, playlist)
        @name = name
        @playlist = playlist
    end

    def make_playlist(*queue, *song)
        Playlist.new(queue,song)
    end



end


class Song

    def intialize(name, artist)
        @name = name
        @artist = artist
    end

    def find_song
        #check to find artist/song name
    end

    def play_song

    end

end


class Node
    def dfs(target, &prc)
        raise if prc.nil?
        queue = [self]

        until queue.empty?
            current = queue.pop
            if prc.call(current.value) == target
                return current
            end
            
            current.children.each do |child|
                queue << child
            end

        end
    end
end

class Node
    def dfs(target, &prc)
        raise if prc.nil?
        queue = [self]

        until queue.empty?
            current = queue.shift
            if prc.call(current.value) == target
                return current
            end
            
            current.children.each do |child|
                queue << child
            end

        end
    end
end
