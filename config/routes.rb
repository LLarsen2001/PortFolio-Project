Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    get '/users/:user_id/data', to: 'userjobs#boarddata'
    get '/users/:user_id/userjobs/:id', to: 'userjobs#show'
    post '/users/:user_id/userjobs', to: 'userjobs#create'
    post '/users/:id/update_image', to: 'users#update_image'
    get '/users/:user_id/userjobs', to: 'userjobs#index'
    put '/users/:user_id/userjobs/:id', to: 'userjobs#update'
    delete '/users/:user_id/userjobs/:id', to: 'userjobs#destroy'
    get '/jobs', to: 'jobs#available'
    get '/jobs/all', to: 'jobs#all'
    get '/jobs/:job_id', to: 'jobs#show'
    post '/jobs', to: 'jobs#create'
    put '/jobs/:job_id', to: 'jobs#update'
    delete '/jobs/:job_id', to: 'jobs#destroy'
    get '/companies', to: 'companies#index'
    post '/companies', to: 'companies#create'
    get '/userjobs/:id/notes', to: 'notes#index'
    post '/userjobs/:id/notes', to: 'notes#create'
  end
end
