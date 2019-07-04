class Employee
    attr_reader :name, :salary, :title, :boss
    def initialize(name, title, salary, boss)
        @name = name
        @title = title
        @salary = salary
        @boss = boss
    end

    def bonus(multiplier)
        @salary * multiplier
    end 
end

class Manager < Employee
    attr_reader :employees

    def initialize(name, title, salary, boss, employees)
        @employees = employees
        super(name, title, salary, boss)
    end

    def bonus(multiplier)
        sum = 0 
        @employees.each do |employee|
            sum += employee.salary
        end 
        sum * multiplier
    end 
end

# manager = Manager.new("Darren", "Manager", 78000, "Ned", employees)
# employees = [Employee.new("Shawna", "TA", 12000, "Darren"), Employee.new("David", "TA", 10000, "Darren")]