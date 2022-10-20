Rails.application.routes.draw do
  resources :reviews
  resources :users, only: [:index, :create, :update]
  resources :games, only: [:index, :show, :destroy]
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

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
