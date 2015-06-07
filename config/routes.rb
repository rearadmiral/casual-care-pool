Rails.application.routes.draw do
  get '/', controller: 'dashboards', action: 'show'
  resources :dogs
  resources :owners
end
