
# Part 2: Bench Show

Let's begin making benches

We should start from the backend!
Start with making a `benches` table and `Bench` model

Let's consider what columns we need to need for our benches!

`name`:string - Name for this bench
`description`:text - Description of the bench
`lat`:float - Latitude
`lng`:float - Longitude
`material`:string - What is the bench made of?
`public`:boolean - Publicly accessible?
`wifi`:boolean - Is there wifi available?
`scenicView`:boolean - Does it have a particularly scenic view?
`seats`:integer - How many people can it seat at a time?
`layable`:boolean - Can you lay down on it?
`shaded`:boolean - Does it have shade?
`approach`:integer - Difficulty to reach bench 


*** Don't worry about images for now! ***
(https://open.appacademy.io/learn/swe-in-person/react/active-storage-and-aws-s3-hosting-demo)


Create a new table and model for benches
`rails g model Bench name description:text lat:float lng:float material wifi:boolean scenic:boolean seats:integer layable:boolean shaded:boolean approach:integer`

In the migration file that was generated you can add null restictions and default values.

Add model level validations. You might want to add a method to ensure some default values for your bench attributes.

Make a single seed in your seed file to play around with.

Time to make the controller!
`rails g controller Api::Benches`

Let's start by making just benches#show!
# Routes (namespaced under api)
# Controller (add not found error)
# jBuilder (serve back only the info you want and have it nested under a key of benches)
  - good payload convention?



## REDUX CYCLE
benchApiUtil
benchActions
  - expose error callback!
Test in console
benchesReducer
  - don't forget to add it to entities reducer
benchShow
benchShowContainer
  - add to Main



# Part 4: Reviews
We review them!




logo redirect to /
clearing errors after login
  - receive current user in session errors and clear!
protected routes for session form

