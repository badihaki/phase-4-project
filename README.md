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

# LFG - Looking for Group
## Models
* Console
    - params:
        - name
	- have many games
	- have many sessions, through games
	- have many players, through games
* Players (Users)
    - parms:
        - email
        - password auth
        - nickname
        - bio
	- have many games
	- has many sessions
* Games
    - params:
        - console_id
        - name
        - genre
	- have many sessions
	- has many players
	- belongs to console
* Session - join table
    - params:
        XX - session_creator XX
        - name (???)
        - game_id
        - console_id
	- belongs to console - get via API through 'game'
	- belongs to game - user submittable
	- has many players, through game
## Controllers
* Console
    - Create
    - Read
* Players/Users
    - Create
        - 'create_params' method to permit certain parameters
    - Read
    - Update
        - 'update_params' method to permit all permittable params
* Games
    - Create
    - Read
    - Delete
        - include sessions
* Session
    - Create
    - Read
    - Update
    - Delete
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
* password for admin is lifeink