food = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'] #=> "fiiiissshhhhhh"

def slug(arr)
    sorted = false
    until sorted
        sorted = true
        (0...arr.size - 1).each do|i|
            cur = arr[i]
            com = arr[i + 1]
            if cur.size > com.size
                arr[i], arr[i + 1] = arr[i + 1], arr[i]
                sorted = false
            end
        end
    end
    arr.last
end

# puts slug(food)

def dominant(food)
    merge_sort(food).last
end

def merge_sort(food)
    return food if food.size < 2
    mid = food.size / 2
    left = merge_sort(food.take(mid))
    right = merge_sort(food.drop(mid))
    merge(left,right)
end

def merge(left,right)
    merged = []
    until left.empty? || right.empty?
        if left[0].size > right[0].size
            merged << right.shift
        else
            merged << left.shift
        end
    end

    merged + left + right
end

# p dominant(food)

def clever_oct(food)
    hash = {}
    food.each do |fo|
        hash[fo.size] = fo
    end
    hash.fetch(hash.keys.max)
end

# p clever_oct(food)

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

def slow_dance(dir,tiles_array)
    tiles_array.each_with_index do |tile,i|
        return i if dir == tile
    end
    nil
end

# p slow_dance("up", tiles_array) # 0

# p slow_dance("right-down", tiles_array) # 3


new_tiles_data_structure = {"up" => 0, "right-up" => 1, "right" => 2, "right-down" => 3, "down" => 4, "left-down" => 5, "left" => 6,  "left-up" => 6}


def fast_dance(dir,new_tiles_data_structure)
    new_tiles_data_structure.fetch(dir)
end

p fast_dance("up", new_tiles_data_structure) # 0

p fast_dance("right-down", new_tiles_data_structure) # 3