Rails.application.routes.draw do
  get 'fortunes', to: 'fortunes#index'
  get 'fortunes/create'
  get 'fortunes/destroy'
  get 'users/index'
  get 'users/create'
  get 'users/show'
  get 'users/destroy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
