puts "Seeding teams..."
sizzlers = Team.create(location: 'Topeka', nickname: 'Sizzlers', home_venue: 'Kansas Expocentre')
rockets = Team.create(location: 'Denver', nickname: 'Rockets', home_venue: 'Denver Coliseum')
blizzard = Team.create(location: 'New England', nickname: 'Blizzard', home_venue: 'Hartford Civic Center')
puts "Done seeding!"