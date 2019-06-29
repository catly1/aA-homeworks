def exponent(base, number)
    return 1 if number == 0

    base * exponent(base, number - 1)
end


def deep_dup(arr)
    new = []
    arr.each do |el|
        new << (el.is_a?(Array) ? deep_dup(el) : el)
    end
    new
end

robot_parts = [
  ["nuts", "bolts", "washers"],
  ["capacitors", "resistors", "inductors"]
]

# p deep_dup(robot_parts)

def fibonacci(num)
    return [0,1].take(num) if num <= 2
    fib_arr = fibonacci(num - 1)
    fib_arr << fib_arr[-1] + fib_arr[-2]
    fib_arr
end


def fibonacci(num)
    arr = [0,1]
    return arr.take(num) if num <= 2

    until arr.length == num
        arr << arr[-1] + arr[-2]
    end

    arr
end

# p fibonacci(10)

def bsearch(arr, target)
    return nil if arr.empty?
    mid = arr.size / 2

    case target <=> arr[mid]
    when -1
        bsearch(arr.take(mid), target)
    when 0
        return mid
    when 1
        right = bsearch(arr.drop(mid + 1), target)
        right.nil? ? nil : (mid + 1 + right)
    end


end


# p bsearch([1, 2, 3], 1) # => 0
# p bsearch([2, 3, 4, 5], 3) # => 1
# p bsearch([2, 4, 6, 8, 10], 6) # => 2
# p bsearch([1, 3, 4, 5, 9], 5) # => 3
# p bsearch([1, 2, 3, 4, 5, 6], 6) # => 5
# p bsearch([1, 2, 3, 4, 5, 6], 0) # => nil
# p bsearch([1, 2, 3, 4, 5, 7], 6) # => nil


class Array
    def merge_sort(&prc)
        prc ||= Proc.new {|a,b| a <=> b}
        return self if self.length <= 1
        mid = self.size / 2
        left = self.take(mid).merge_sort(&prc)
        right = self.drop(mid).merge_sort(&prc)

        merge(left,right,prc)
    end

    def merge(left,right,prc)
        merged = []

        until left.size == 0 || right.size == 0
            case prc.call(left.first,right.first)
            when -1
                merged << left.shift
            else
                merged << right.shift
            end
        end
        merged + left + right
    end
end

# p [3,4,6,2,4,2].merge_sort
# p [3,4,6,2,4,2].merge_sort {|a,b| b <=> a}

def subsets(arr)
    return [[]] if arr.empty?

    subs = subsets(arr[0...-1])

    subs + subs.map do |sub|
        sub + [arr.last]
    end
end

# p subsets([]) # => [[]]
p subsets([1]) # => [[], [1]]
p subsets([1, 2]) # => [[], [1], [2], [1, 2]]
p subsets([1, 2, 3])