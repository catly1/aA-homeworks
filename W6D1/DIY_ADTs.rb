  class Stack
    def initialize
      # create ivar to store stack here!
      @ivar = []
    end

    def push(el)
      # adds an element to the stack
        @ivar.push(el)
    end

    def pop
      # removes one element from the stack
        @ivar.pop
    end

    def peek
      # returns, but doesn't remove, the top element in the stack
        @ivar[-1]
    end
  end

  stack = Stack.new
  puts "This is a stack"
  stack.push(1)
  stack.push(2)
  p stack.peek
  stack.pop
  p stack.peek
  puts "-----------"

  class Queue
    def initialize
        @ivar = []
    end

    def enqueue(el)
        @ivar.push(el)
    end

    def dequeue
        @ivar.shift
    end

    def peek
        @ivar[-1]
    end

  end

  queue = Queue.new
  puts "This is a queue"
  queue.enqueue(1)
  queue.enqueue(2)
  p queue.peek
  queue.dequeue
  p queue.peek
  puts "-----"

  class Map
    def initialize
        @ivar = {}
    end

    def set(key, value)
        @ivar[key] = value
    end

    def get(key)
        @ivar[key]
    end

    def delete(key)
        @ivar.delete(key)
    end

    def show
        @ivar
    end

    def has_key?(key)
        @ivar.has_key?(key)
    end
  end
  
  map = Map.new
  puts "This is a map"
  map.set("a", 2)
  map.set("b", 3)
  map.set("c", 3)
  p map.show
  map.set("a", 1)
  map.delete("c")
  p map.has_key?("a")
  p map.show
  puts "-----"