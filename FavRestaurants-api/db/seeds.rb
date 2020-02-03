# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Restaurant.create([
    {name: 'Over The Falls', city: 'Wake Forest', state: 'North Carolina'},
    {name: 'Simons Restauarant', city: 'Horseheads', state: 'New York'},
    {name: 'Stumble Inn', city: 'New York', state: 'New York'},
    {name: 'Pita Pocket', city: 'Van Nuys', state: 'California'}
])

Dish.create([
    {name: 'Cali Pastrami', restaurant_id: 1},
    {name: 'Beef Tendon Soup', restaurant_id: 2},
    {name: 'Stuffed Bacon Burger', restaurant_id: 3},
    {name: 'Lamb Shawarma Laffa', restaurant_id: 4}
])