require "set"

class GraphNode
    attr_accessor :value, :neighbors

    def initialize(value)
        self.value = value
        self.neighbors = []
    end

    def bfs(starting_node, target_value, visited = Set.new())
        queue = [starting_node]

        until queue.empty?
            el = queue.shift
            unless visited.include?(el)
                if el.value == target_value
                    return el.value
                end
                visited.add(el)
                queue.concat(el.neighbors)
            end
        end
        nil
    end


end

a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c')
d = GraphNode.new('d')
e = GraphNode.new('e')
f = GraphNode.new('f')
a.neighbors = [b, c, e]
c.neighbors = [b, d]
e.neighbors = [a]
f.neighbors = [e]

p a.bfs(a, "f")