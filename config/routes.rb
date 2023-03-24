Rails.application.routes.draw do
  get "homes/top"
  get "main/index"
  get "practice/index"
  get "practice/show"
  
  #root to: "main#index"
  root to: "practice#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
