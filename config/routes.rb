Rails.application.routes.draw do
  

  resources :reviews
  resources :restaurants, only: [:index, :show]
  resources :users, only: [:create, :show, :index, :update]

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post '/login', to: 'sessions#create'
  delete '/logout', to:'sessions#destroy' 
  post '/signup', to: 'users#create'
  patch '/update_user', to: 'users#update'
  delete 'destroy_user', to: 'users#destroy'
  get '/authorized_user', to: 'users#show'
end
