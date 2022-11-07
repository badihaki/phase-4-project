# README

### Set Up
In order to run the servers, fork and clone this repository, cd to directory, and run these commands in order:
- Start the Postgresql server:
    $ sudo service postgresql start
- Start rails server
    $ rails s
- Start npm server
    $ npm start --prefix client

# Game Reviews Aggregate

## General

This is my project for Phase 4 of Flatiron's online software engineering course. I made an aggregator for user reviews. I imagine this to be an alternative to product reviews on product sites, a sort of Glassdoor for video games, something unhindered by the need to sell the product it asks you to review.

## Minimal Viable Product

The MVP will contain the API to access the database for Users, Games and Reviews tables, while also containing code to render a simple front-end. Styling will be limited, but Users will be able to add games to the list, submit reviews for games and edit and delete their associated reviews.

## Further Goals

* More unique styling

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
        - description
	- have many groups
	- has many players, through groups
* Reviews
    - params:
        - Score
        - Comment
    - JOIN TABLE
        - Belongs to both Users and Games
        - Schema must contain 'game_id' and 'user_id'
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
    - Update
        - Only Description
    - Delete
        - include group requests
* Reviews
    - Create
        - 'permitted_params' method to allow game_id, score, comment and user_id
            - Must include user_id and game_id
    - Read
        - Index
            - Can get all reviews
            - Can get all reviews associated to signed in user
    - Update
        - Only comment and score
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
        * User Reviews
            - List reviews user has submitted
            - Edit reviews (comments, score only)
            - Delete reviews
        * User Games
            - Show data associated with the game a user has, through the review
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
            - Description
            - Reviews and aggregate score
            * Game reviews
                - Show list of reviews for a game
            * New Review Form
                - Allows for submission of additional reviews
* password for admin is admin0089
* password for admin is lifeink with local db