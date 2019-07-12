# == Schema Information
#
# Table name: countries
#
#  name        :string       not null, primary key
#  continent   :string
#  area        :integer
#  population  :integer
#  gdp         :integer

require_relative './sqlzoo.rb'

# BONUS QUESTIONS: These problems require knowledge of aggregate
# functions. Attempt them after completing section 05.

def highest_gdp
  # Which countries have a GDP greater than every country in Europe? (Give the
  # name only. Some countries may have NULL gdp values)
  execute(<<-SQL)
    SELECT
      name
    FROM 
      countries
    WHERE
      gdp > ALL (
        SELECT
          COALESCE(gdp, 0)
        FROM
          countries
        WHERE
          continent = 'Europe'
      )
  SQL
end

def largest_in_continent
  # Find the largest country (by area) in each continent. Show the continent,
  # name, and area.
  execute(<<-SQL)
  SELECT
    continent, name, area
  FROM
    countries 
  WHERE
      area = ANY(SELECT
      MAX(area)
     FROM
       countries
     GROUP BY
       continent
      )
  GROUP BY
  name
   

  SQL
end

def large_neighbors
  # Some countries have populations more than three times that of any of their
  # neighbors (in the same continent). Give the countries and continents.
  execute(<<-SQL)
  SELECT
    name, continent
  FROM
    countries AS country1
  WHERE
    country1.population/3 > (
      SELECT
        MAX(country2.population)
      FROM
        countries AS country2
      WHERE
        country1.name != country2.name AND
        country1.continent = country2.continent
      GROUP BY
        continent
    ) 
  SQL
end
