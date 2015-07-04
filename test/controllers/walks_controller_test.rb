require 'test_helper'

class WalksControllerTest < ActionController::TestCase
  setup do
    @walk = walks(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:walks)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create walk" do
    assert_difference('Walk.count') do
      post :create, walk: { dog_id: @walk.dog_id, finished_at: @walk.finished_at, name: @walk.name, requested_at: @walk.requested_at, walker_id: @walk.walker_id }
    end

    assert_redirected_to walk_path(assigns(:walk))
  end

  test "should show walk" do
    get :show, id: @walk
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @walk
    assert_response :success
  end

  test "should update walk" do
    patch :update, id: @walk, walk: { dog_id: @walk.dog_id, finished_at: @walk.finished_at, name: @walk.name, requested_at: @walk.requested_at, walker_id: @walk.walker_id }
    assert_redirected_to walk_path(assigns(:walk))
  end

  test "should destroy walk" do
    assert_difference('Walk.count', -1) do
      delete :destroy, id: @walk
    end

    assert_redirected_to walks_path
  end
end
