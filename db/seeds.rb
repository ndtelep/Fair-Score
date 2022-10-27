puts "Seeding teams..."
sizzlers = Team.create(location: 'Topeka', nickname: 'Sizzlers', home_venue: 'Kansas Expocentre',imageUrl:"https://www.mascotdb.com/sites/default/files/images/logos/79590-2.gif", user_id: 1)
rockets = Team.create(location: 'Denver', nickname: 'Rockets', home_venue: 'Denver Coliseum',imageUrl:"https://static.wikia.nocookie.net/prosportsteams/images/a/ad/DVR.gif/revision/latest?cb=20140521003655", user_id: 1)
blizzard = Team.create(location: 'New England', nickname: 'Blizzard', home_venue: 'Hartford Civic Center',imageUrl:"https://upload.wikimedia.org/wikipedia/en/5/59/NEBlizzard.gif", user_id: 1)
puts "Seeding games..."
Game.create!([
    {team_id: blizzard.id,
    opposing_team: "Dingers",
    win: true,
    venue: "Arizona Veterans Memorial Coliseum",
    home: false,
    completed: true},
    {team_id: rockets.id,
        opposing_team: "Giants",
        win: false,
        venue: "Pacific Coliseum",
        home: false,
        completed: true},
    {team_id: sizzlers.id,
        opposing_team: "Chargers",
        win: true,
        venue: "Kansas Expocentre",
        home: true,
        completed: true}
])
puts "Seeding players..."
Player.create!([
    {team_id: sizzlers.id,
    first_name: "Debbie",
    last_name: "Black",
    points: 7,
    assists: 4,
    rebounds: 2,
    steals: 1,
    blocks: 9,
    number: 10},
    {team_id: rockets.id,
        first_name: "Brittney",
        last_name: "Griner",
        points: 7,
        assists: 4,
        rebounds: 2,
        steals: 1,
        blocks: 9,
        number: 42},
        {team_id: sizzlers.id,
            first_name: "Sami",
            last_name: "Whitcomb",
            points: 7,
            assists: 4,
            rebounds: 2,
            steals: 1,
            blocks: 9,
            number: 75},
            {team_id: blizzard.id,
                first_name: "Theresa",
                last_name: "Plessance",
                points: 7,
                assists: 4,
                rebounds: 2,
                steals: 1,
                blocks: 9,
                number: 22},
])

User.create!([
{name: "ndtelep",
password: "nicolas",},

{name: "edward",
password: "edward",} 
])
puts "Done seeding!"