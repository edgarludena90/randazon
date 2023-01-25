Rails.application.routes.draw do
  resources :reviews
  resources :restaurants, only: [:index, :show, :create]
  resources :users, only: [:show, :create, :update]
  post '/login', to: 'sessions#create'
  get '/me', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
end
