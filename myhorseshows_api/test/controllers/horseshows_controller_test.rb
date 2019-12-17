require 'test_helper'

class HorseshowsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @horseshow = horseshows(:one)
  end

  test "should get index" do
    get horseshows_url, as: :json
    assert_response :success
  end

  test "should create horseshow" do
    assert_difference('Horseshow.count') do
      post horseshows_url, params: { horseshow: { date: @horseshow.date, eventtype: @horseshow.eventtype, time: @horseshow.time, venue: @horseshow.venue, website: @horseshow.website } }, as: :json
    end

    assert_response 201
  end

  test "should show horseshow" do
    get horseshow_url(@horseshow), as: :json
    assert_response :success
  end

  test "should update horseshow" do
    patch horseshow_url(@horseshow), params: { horseshow: { date: @horseshow.date, eventtype: @horseshow.eventtype, time: @horseshow.time, venue: @horseshow.venue, website: @horseshow.website } }, as: :json
    assert_response 200
  end

  test "should destroy horseshow" do
    assert_difference('Horseshow.count', -1) do
      delete horseshow_url(@horseshow), as: :json
    end

    assert_response 204
  end
end
