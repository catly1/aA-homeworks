# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cat1 = Cat.create(birth_date: 19871225, color:"black", name:"Tommy", sex:"M", description: "Chases mice!")
cat2 = Cat.create(birth_date: 19920903, color:"white", name:"Jerry", sex:"M")
cat3 = Cat.create(birth_date: 19940831, color:"orange", name:"Sasha", sex:"F")
cat4 = Cat.create(birth_date: 19610820, color:"brown", name:"Senya", sex:"F")
cat5 = Cat.create(birth_date: 20040519, color:"black", name:"Cash", sex:"M")
cat6 = Cat.create(birth_date: 20040519, color:"white", name:"Johnny", sex:"M")

# t.integer "cat_id", null: false
# t.date "end_date", null: false
# t.date "start_date", null: false
# t.string "status", null: false
# t.datetime "created_at", null: false
# t.datetime "updated_at", null: false
# t.index ["cat_id"], name: "index_cat_rental_requests_on_cat_id"
