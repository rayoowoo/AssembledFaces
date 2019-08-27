Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    
    resources :users, only: [:create, :show, :index, :update] do 
      resources :posts, only: [:index, :show, :create]
      resources :chats, only: [:index, :show, :create]
    end

    resource :session, only: [:create, :destroy]
    
    resources :posts, only: [:update, :destroy] do
      resources :comments, only: [:create]
    end

    resources :comments, only: [:update, :destroy]

    resources :friendships, only: [:create, :destroy, :update]

    resources :likes, only: [:create, :destroy]

    resources :tags, only: [:create, :destroy]
  end

  post '/api/posts/:id', to: 'api/posts#feed', defaults: {format: :json}
  post '/api/users/:string', to: 'api/users#search', defaults: {format: :json}
  post '/api/users/:user_id/:string', to: 'api/users#friends', defaults: {format: :json}
  get '/api/posts/last', to: 'api/posts#last', defaults: {format: :json}
  # get 'api/users/all', to: 'api/users#all', defaults: {format: :json}

  root to: 'static_pages#root'
  mount ActionCable.server, at: '/cable'
end