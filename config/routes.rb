Rails.application.routes.draw do
  get "homes/top"
  get "practice/index"
  get "main/index"
  
  #root to: "main#index"
  root to: "practice#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
