Rails.application.routes.draw do
  root controller: 'dashboards', action: 'show'
  resources :walks do
    resources :walk_requests
  end
  resources :dogs
  resources :owners
end
