Rails.application.routes.draw do
  get 'fortunes', to: 'fortunes#index'
  # get 'fortunes/create'
  post 'fortunes', to: 'fortunes#create'
  get 'fortunes/destroy'
  get 'users', to: 'users#index'
  # get 'users/create'
  post 'users', to: 'users#create'
  get 'users/show'
  get 'users/destroy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
