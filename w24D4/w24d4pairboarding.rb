def subsets(arr)
return [[]] if arr.empty ?

    val = arr[0]
  subs = subsets(arr.drop(1))
new_subs = subs.map { | sub | sub + [val] }

subs + new_subs
end



def longest_palindrome(string)
best_palindrome_start = 0
best_palindrome_len = 0

0.upto(string.length - 1).each do | start |
# micro - optimization: don't look at substrings shorter than best
# palindrome.
    len = best_palindrome_len + 1
while start + len <= string.length
      if is_palindrome ? (string, start, len)
        best_palindrome_start, best_palindrome_len = start, len
end

len += 1
end
end

[best_palindrome_start, best_palindrome_start + best_palindrome_len - 1]
end

def is_palindrome ? (string, start, len)
  len.times do | i |
    if string[start + i] != string[(start + len - 1) - i]
      return false
end
end

true
end


def intersection2(arr1, arr2)
  arr1, arr2, idx1, idx2 = arr1.sort, arr2.sort, 0, 0

  intersection = []
  while idx1 < arr1.length && idx2 < arr2.length
    case arr1[idx1] <=> arr2[idx2]
    when -1
      idx1 += 1
    when 0
      intersection << arr1[idx1]
      idx1 += 1
      idx2 += 1
    when 1
      idx2 += 1
    end
  end
  intersection
end


def intersection3(arr1, arr2)
  intersection = []
  set_1 = arr1.to_set
  arr2.each do |el|
    intersection << el if set_1.include?(el)
  end

  intersection
end


def common_subsets(arr1, arr2)
  subsets(intersection3(arr1, arr2))
end

def subsets(arr)
  return [[]] if arr.empty?

  val = arr[0]
  subs = subsets(arr.drop(1))
  new_subs = subs.map { |sub| sub + [val] }

  subs + new_subs
end

# If given can move left or right
# Recursion
def can_win?(arr, pos = 0, seen = {})
  return false if !pos.between?(0, arr.length - 1) || seen[pos]
  return true if arr[pos].zero?

  seen[pos] = true

  can_win?(arr, pos + arr[pos], seen) ||
  can_win?(arr, pos - arr[pos], seen)
end

# Iterative
# A non-recursive solution.
def can_win(array, index)
  positions_to_try = [index]
  visited_positions = Array.new(array.length, false)
  visited_positions[index] = true

  until positions_to_try.empty?
    # We should probably use a queue for this.
    position = positions_to_try.shift
    value = array[position]

    if value == 0
      return true
    end

    [position + value, position - value].each do |pos|
      next if visited_positions[pos]
      next if (pos < 0 || array.length <= pos)

      positions_to_try << pos
      # This insures we don't add a position twice to our queue.
      visited_positions[pos] = true
    end
  end

  false
end


# Non-Comparison Sorts
def sort2(arr, max_val)
  counts = Array.new(max_val + 1, 0)
  arr.each { |el| counts[el] += 1 }

  arr = []
  counts.each_index do |val|
    counts[val].times { arr << val }
  end
  arr
end

def sort3(strings, length)
  (length - 1).downto(0) do |i|
    buckets = Array.new(26) { [] }
    strings.each do |string|
      letter = string[i]
      buckets[letter.ord - "a".ord] << string
    end

    strings = []
    buckets.each do |bucket|
      bucket.each { |string| strings << string }
    end
  end

  strings
end

sort3([`cat`, `car`, `bat`])

# buckets after sorting by last letter
buckets = [[], ... , [`car`], ..., [`cat`, `bat`],  ...]

# strings after we join the buckets back together, now sorted by last letter
strings = [`car`, `cat`, `bat`]

# buckets after sorting by second to last letter - note that they retain their relative ordering by last letter in the buckets
buckets = [[`car`, `cat`, `bat`], ..., []]

# strings after we join the buckets back together, now sorted by last letter and second-to-last letter
strings = [`car`, `cat`, `bat`]

# lastly, buckets sorted by the first and most important letter
buckets = [[], ..., [`bat`], [`car`, `cat`] ...]

strings = [`bat`, `car`, `cat`]

# weighted_random_index
## Given an array, write a function that will return a random index of the array. The probability of an index being returned is weighted by the value at that index against the sum of the array values. 
def weighted_random_index(arr)
  total_sum = arr.inject(:+)
  value = rand(total_sum)

  cumulative_sum = 0
  arr.each_with_index do |el, i|
    cumulative_sum += el
    return i if value < cumulative_sum
  end
end