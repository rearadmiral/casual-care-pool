json.array!(@walks) do |walk|
  json.extract! walk, :id, :name, :requested_at, :finished_at, :dog_id, :walker_id
  json.url walk_url(walk, format: :json)
end
