# # # Carlos - Problem 1
# class Array
#     def merge_sort(&prc)
#         prc ||= Proc.new {|a,b| a <=> b}
#         return self if self.size <= 1
#         mid = self.size / 2
#         left = self.take(mid)
#         right = self.drop(mid)
#         left_sorted = left.merge_sort(&prc)
#         right_sorted = right.merge_sort(&prc)
#         merge(left_sorted, right_sorted, prc)
#     end
    
#     def merge(left, right, prc)
#         sorted = []
#         until left.empty? || right.empty?
#             if prc.call(left.first,right.first) == -1
#                 sorted << left.shift
#             else
#                 sorted << right.shift
#             end
#         end

#         sorted + left + right
#     end
# end

# # Brett - Problem 1
# def bsearch(nums, target)
#     return nil if nums.empty?

#     mid = nums.length / 2

#     case target <=> nums[mid]
#     when -1
#         bsearch(nums.take(mid), target)
#     when 0
#         mid
#     when 1
#         current = bsearch(nums.drop(mid + 1), target)
#         current.nil? ? nil : (mid + 1) + current
#     end
# end


# #Carlos - Problem 2 - Doesn't work

# class Array
#     def my_flatten(num = 1)
#         flat = self.dup
#         return self if num == 0

#         self.each do |el|
#             el.is_a?(Array) ? flat + el : flat << el.flatten(num -= 1)
#         end

#         flat
#     end
# end

# # p [["a"], "b", ["c", "d", ["e"]]].my_flatten(1) #= ["a", "b", "c", "d", ["e"]]


# #Brett - Problem 2
# # write method that calls block for each element of the array
# class Array
#     def my_each(&prc)
#         new_arr = []
#         i = 0
#         while i < self.length
#             new_arr << prc.call(self[i])
#             i += 1
#         end
#         new_arr
#     end
# end


# #Carlos - Problem 3 - Doesn't work
# class Array
#     def my_reduce(&prc, acc = nil)
#         prc ||= Proc.new {|a,b| a += b}

#         if acc.nil?
#             acc = self[0]
#             self.drop(1).each do |el|
#                 acc = prc.call(acc,el)
#             end
#             return acc
#         else
#             self.each do |el|
#                 acc = prc.call(acc,el)
#             end
#             return acc
#         end

#     end
# end


# # Brett - Problem 3
# # hash - keys are elements that appear > 1, values are arrays of the indices
# class Array
#     def dups
#         hash = Hash.new { |h,k| h[k] = [] }

#         self.each_with_index do |el, i|
#             hash[el] << i
#         end

#         indices = {}
#         hash.each do |k,v|
#             indices[k] = v if v.length > 1
#         end
#         indices
#     end
# end


# #Carlos - Problem 4
# # returns true if the words in the string can be rearranged to form the sentence in the arg
# # "cats are cool".shuffled_sentence_detector("dogs are cool") => false
# # "cool cats are".shuffled_sentence_detector("cats are cool") => true

# class String 
#     def shuffled_sentence_detector(str)
#         words1 = self.split(" ")
#         words2 = str.split(" ")

#         words1_hash = Hash.new(0)
#         words2_hash = Hash.new(0)

#         words1.each {|word| words1_hash[word] += 1}
#         words2.each {|word| words2_hash[word] += 1}

#         words1_hash == words2_hash
#     end
# end


# # Brett - Prbolem 4
# # recursion - factorials - first n array
# # n = 1 => [1] 0!
# # 1, 1, 2, 6, 24, 120
# def facs_arr(n)
#     return [1] if n == 1
#     return [1,1] if n == 2
#     seq = facs_arr(n - 1)
#     seq << facs_arr(n - 1)[-1] * (n - 1)
#     seq
# end

# #Carlos - problem 5
# # Fib array recursion.


# def fibonacci(num)
#     return [0] if num = 1
#     return [0 , 1] if num = 2

#     fib = fibonacci(num - 1)

#     fib << fibonacci[-1] + fibonacci[-2]

#     fib
# end


# # Brett - problem 5
# # digital sum

# def digital_sum(num)
#     return num if < 10

#     num % 10 + digital_sum(num / 10)
# end


# #Carlos - problem 6
# # return a method that returns the largest factor of a given number that's prime

# def prime_factors(n)
#     factors = factors(n).reverse

#     factors.each do |num|
#         return num if prime?(num)
#     end

#     return nil
# end

# def factors(n)
#     factors = []
#     (1..n).each do |num|
#         factors << num % n == 0
#     end
#     factors
# end

# def prime?(n)
#     return false if n < 2
#     return false if (2...n).any? {|num| n % num == 0}

#     return true
# end


# # Brett - problem 6
# # takes a string and an alphabet, returns a copy of the string with the letters reordered according to their positions in the given alphabet
# # if no alphabet is passed, it defaults to the normal alphabet

# # jumble_sort("hello") => "ehllo"
# # jumble_sort("hello", ['o', 'l', 'h', 'e']) => 'ollhe'

# def jumble_sort(str, alpha=nil)
#     alpha ||= ("a".."z").to_a

#     indices = []
#     new_str = ""

#     str.each_char do |char|
#         indices << alpha.index(char)
#     end

#     indices.sort.each do |i|
#         new_str += alpha[i]
#     end

#     new_str
# end


# (0...str.size - 1).each do |n|
#       if alphabet.index(str[i]) > alphabet.index(str[i + 1])
#         str[i], str[i + 1] = str[i + 1], str[i]
#         sorted = false
#       end
# end





# # Carlos - problem 7

# def bsearch(arr, target)
#     return nil if arr.size == 1 && arr[0] != target
#     return nil if arr.empty?
#     mid = arr.size / 2

#     case mid <=> arr[target]
#     when -1
#         bsearch(arr.take(mid), target)
#     when 0
#         mid
#     when 1
#         right = bsearch(arr.drop(mid + 1), target)
#         right.nil? ? return nil : (mid + 1) + right
#     end

# end


# # Brett - merge sort
# class Array
#     def merge_sort(&prc)
#         prc ||= Proc.new { |x,y| x <=> y }

#         return [] if self.empty?
        
#         mid = self.length / 2
#         left = self.take(mid).merge_sort(prc)
#         right = self.drop(mid).merge_sort(prc)

#         merge(left, right, prc)
#     end

#     def merge(left, right, &prc)
#         merged = []

#         until left.empty? || right.empty?
#             case prc.call(left.first, right.first)
#             when -1
#                 merged << left.shift
#             when 0
#                 merged << left.shift
#             when 1
#                 merged << right.shift
#             end
#         end
#         merged.concat(left)
#         merged.concat(right)
#         merged
#     end
# end


# #Carlos - problem 8

# class Array
#     def my_each(&prc)
#         i = 0
#         while i < self.size
#             prc.call(self[i])
#             i += 1
#         end
#         self
#     end
# end


# Brett - flatten

class Array
    def my_flatten(level=nil)
        arr = self.dup
        return arr if level == 0

        next_level = level ? level - 1 : nil
        self.each_with_index do |el, i|
            arr[i..i] = el.my_flatten(next_level) if el.is_a? Array
        end

        arr
    end
end

# Without an argument:
p [["a"], "b", ["c", "d", ["e"]]].my_flatten #= ["a", "b", "c", "d", "e"]

# When given 1 as an argument:
# (Flattens the first level of nested arrays but no deeper)
p [["a"], "b", ["c", "d", ["e"]]].my_flatten(1) #= ["a", "b", "c", "d", ["e"]]


#Carlos - Problem 8

class Array
    def dups
        hash = Hash.new {|hash,k| hash[k] = []}

        self.each_with_index {|el, i| hash[el] << i}

        hash.select {|k,v| v.size > 1}
    end
end


# Brett - reduce
class Array
    def my_reduce(acc, &prc)
        if !acc
            acc = self.first
            self[1..-1].each do |el|
                acc =  prc.call(acc, el)
            end
        else
            self.each do |el|
                acc =  prc.call(acc, el)
            end
        end
        acc
    end
end

p [1,2,3,4].my_reduce(1) { |x,y| x * y }