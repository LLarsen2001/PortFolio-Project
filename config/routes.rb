Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    get '/users/:user_id/userjobs', to: 'userjobs#index'
    get '/users/:user_id/userjobs/:id', to: 'userjobs#show'
    put '/users/:user_id/userjobs/:id', to: 'userjobs#update'
    delete '/users/:user_id/userjobs/:id', to: 'userjobs#destroy'
  end
end
