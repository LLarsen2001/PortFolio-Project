Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    get '/users/:user_id/data', to: 'userjobs#boarddata'
    get '/users/:user_id/userjobs/:id', to: 'userjobs#show'
    post '/users/:user_id/userjobs', to: 'userjobs#create'
    get '/users/:user_id/userjobs', to: 'userjobs#index'
    put '/users/:user_id/userjobs/:id', to: 'userjobs#update'
    delete '/users/:user_id/userjobs/:id', to: 'userjobs#destroy'
    get '/jobs', to: 'jobs#index'
    get '/jobs/:job_id', to: 'jobs#show'
    post '/jobs', to: 'jobs#create'
    put '/jobs/:job_id', to: 'jobs#update'
    delete '/jobs/:job_id', to: 'jobs#destroy'
  end
end
