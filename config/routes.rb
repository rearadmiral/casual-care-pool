Rails.application.routes.draw do
  root controller: 'dashboards', action: 'show'
  resources :walks do
    resources :walk_requests, as: 'request' do
      post :confirm
    end
  end
  resources :dogs
  resources :owners
end
