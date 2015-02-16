require 'rubygems'
require 'sinatra'
require 'yaml'

before do
  response["Cache-Control"] = "public, max-age=86400"
end

get '/' do
  @restaurant_array = YAML.load_file('data/restaurants.yml').sort.to_a
  erb(:index)
end
