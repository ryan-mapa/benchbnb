# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Bench.delete_all

demo_user = User.new(email: "guest@aa.io", password: "go_bench_go")
demo_user.save!

b1 = Bench.create!(
  name: "Beachy Bench",
  description: 'Ocean Beach, gnarly breh',
  seats: 3,
  lat: 37.769996,
  lng: -122.511281,
)