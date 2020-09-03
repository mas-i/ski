require 'test_helper'

class TrafficControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get traffic_index_url
    assert_response :success
  end

end
