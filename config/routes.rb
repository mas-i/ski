Rails.application.routes.draw do
  get 'hotel/index'
  get 'traffic/index'
  get 'weather/index'
  get 'area/index'
  get 'menu/index'
  devise_for :users
  root "menu#index"
  
end
