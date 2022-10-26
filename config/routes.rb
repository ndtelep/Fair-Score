Rails.application.routes.draw do
  resources :players
  resources :games
  resources :teams
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/index', to: 'application#json_index'
end
