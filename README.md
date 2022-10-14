# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# Rails backend, REACT frontend
## At least 3 backend models that include:
	- At least 2 one-to-many relationships
	- At least 1 many-to-many relationships
		- implemented with 'has many through'
		- Must use a join table with a user-submittable attribute
	- Full CRUD for at least one resource
	- Minimum Create and Read for each resource
## At least 3 diff client-side routes using React Router
	- Include nav-bar, duh
## Implement authentication/authorization, including password protection.
	- Sign up new user
	- Sign/Log in user with secure password
	- Stay signed in
	- Sign/Log out
	- User should only be able to edit and delete resources in they are logged in and creator of that resource

### Set Up
In order to run the servers, run these commands in order:
- Start the Postgresql server:
    $ sudo service postgresql start
- Start rails server
    $ rails s
- Start npm server
    $ npm start --prefix client

# LFG - Looking for Group
## Models
* Players (Users)
    - parms:
        - email
        - password auth
        - nickname
        - bio
	- have many games
	- has many group requests
    - has many groups through group requests
* Games
    - params:
        - name
        - genre
	- have many groups
	- has many players, through groups
* Group
    - params:
        - name
        - message
        - game_id
    belongs to game
    has many group requests
    has many players through group requests
* Group Request - join table
    - Joings player to group
    - params:
        XX - session_creator XX
        - game_id -- user submittable
        - user_id
        - request_message (string) -- user submittable
	- belongs to group
    - belonggs to user
    - belongs to game
## Controllers
* Players/Users
    - Create
        - 'create_params' method to permit certain parameters
    - Read
        - Show action through '/me' route for user profile
    - Update
        - 'update_params' method to permit bio and nickname
* Games
    - Create
        - 'create_params' nmethod to permit name and genre
    - Read
        - index and show route
    - Delete
        - include group requests
* Group
    - Create
    - Read
    - Update
        - 'update_params' method to permit update to name and message
    - Delete
        - include group requests
## Components
* App
    - Base app
    * NavBar
         - Shows navigation
         - IF LOGGED IN: Shows user nickname, logout button
         - IF LOGGED OUT: Shows ubtton to Login Form
    * Home
        - Landing page
    * New Player Form
        - creates a new player/user
        - email
        - password/password auth
        - nickname
        - bio
    * Login Form
        - login using email, password
    * User Panel
        - shows user nickname, logout button
        - clicking user nickname leads to Player info
    * Player/User Info (:id)
        - view player info
        * Update Player Form
            - Updates Player nickname, bio
        * Add Games Form
            Add Existing Game Form
                - Adds a game from list of games
                - List of games player doesn't have
                - Can filter by genre
            * New Game Form
                - Adds a new game
                - Name
                - Genre
                - Console
    * Consoles
        - Shows a list of consoles
        - Submit new console button (if logged in)
        * New console Form
            - Adds a new console
            - Console name
    * Games
        - Shows list of games
        - New game button
        * New Game Form (if logged in)
            - Adds a new game
            - Name
            - Genre
            - Console
        * Game Info
            - Shows information about the game
            - Genre
            - Active Players
            - Sessions
        - Delete game button (if logged in)
    * Sessions
        - Shows a list of sessions
        - If logged in:
            - 'Show My Sessions' button
            * Player Sessions
                - Shows a list of sessions for that specific player
                - If session creator: Session delete button
                - Shows a list of players associated with the session
            * Create new Session
                - Select a game from dropdown menu
                - Session creator is logged in player
                - Console is game.console
* password for admin is admin0089
* password for admin is lifeink with local db

### TODO ::
- 'Games' model and controller works. Need to connect it to the front-end
    - Game mini cards need to link to individual game pages
        - Use dynamic routing here
    - Update on the Game Pages