Rails.application.routes.draw do
  resources :users, only: [:show, :create]
  resources :players
  resources :games
  resources :teams
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
