Rails.application.routes.draw do
  resources :users, only: [:index, :create, :update] do
    resources :reviews, except: [:show]
  end
  resources :games, only: [:index, :show, :create, :update]
  resources :reviews, only: [:show, :index]
  #resources :games, only: [:create, :index, :show, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  # auth paths
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # test route
  get '/hello', to: 'application#hello_world'

  # live coding
  get '/reviews/find/:search_term', to: 'reviews#search'

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
