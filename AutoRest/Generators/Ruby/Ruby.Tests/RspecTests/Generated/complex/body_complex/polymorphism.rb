# encoding: utf-8
# Copyright (c) Microsoft Corporation. All rights reserved.
# Licensed under the MIT License. See License.txt in the project root for
# license information.
# 
# Code generated by Microsoft (R) AutoRest Code Generator 0.13.0.0
# Changes may cause incorrect behavior and will be lost if the code is
# regenerated.

module ComplexModule
  #
  # Test Infrastructure for AutoRest
  #
  class Polymorphism
    include ComplexModule::Models

    #
    # Creates and initializes a new instance of the Polymorphism class.
    # @param client service class for accessing basic functionality.
    #
    def initialize(client)
      @client = client
    end

    # @return reference to the AutoRestComplexTestService
    attr_reader :client

    #
    # Get complex types that are polymorphic
    #
    # @param [Hash{String => String}] The hash of custom headers need to be
    # applied to HTTP request.
    #
    # @return [Concurrent::Promise] Promise object which allows to get HTTP
    # response.
    #
    def get_valid(custom_headers = nil)
      # Construct URL
      path = "/complex/polymorphism/valid"
      url = URI.join(@client.base_url, path)
      fail URI::Error unless url.to_s =~ /\A#{URI::regexp}\z/
      corrected_url = url.to_s.gsub(/([^:])\/\//, '\1/')
      url = URI.parse(corrected_url)

      connection = Faraday.new(:url => url) do |faraday|
        faraday.use MsRest::RetryPolicyMiddleware, times: 3, retry: 0.02
        faraday.use :cookie_jar
        faraday.adapter Faraday.default_adapter
      end
      request_headers = Hash.new

      unless custom_headers.nil?
        custom_headers.each do |key, value|
          request_headers[key] = value
        end
      end

      # Send Request
      promise = Concurrent::Promise.new do
        connection.get do |request|
          request.headers = request_headers
          @client.credentials.sign_request(request) unless @client.credentials.nil?
        end
      end

      promise = promise.then do |http_response|
        status_code = http_response.status
        response_content = http_response.body
        unless (status_code == 200)
          error_model = JSON.load(response_content)
          fail MsRest::HttpOperationError.new(connection, http_response, error_model)
        end

        # Create Result
        result = MsRest::HttpOperationResponse.new(connection, http_response)
        # Deserialize Response
        if status_code == 200
          begin
            parsed_response = JSON.load(response_content) unless response_content.to_s.empty?
            unless parsed_response.nil?
              parsed_response = Fish.deserialize_object(parsed_response)
            end
            result.body = parsed_response
          rescue Exception => e
            fail MsRest::DeserializationError.new("Error occured in deserializing the response", e.message, e.backtrace, response_content)
          end
        end

        result
      end

      promise.execute
    end

    #
    # Put complex types that are polymorphic
    #
    # @param complex_body [Fish] Please put a salmon that looks like this:
    # {
    # 'fishtype':'Salmon',
    # 'location':'alaska',
    # 'iswild':true,
    # 'species':'king',
    # 'length':1.0,
    # 'siblings':[
    # {
    # 'fishtype':'Shark',
    # 'age':6,
    # 'birthday': '2012-01-05T01:00:00Z',
    # 'length':20.0,
    # 'species':'predator',
    # },
    # {
    # 'fishtype':'Sawshark',
    # 'age':105,
    # 'birthday': '1900-01-05T01:00:00Z',
    # 'length':10.0,
    # 'picture': new Buffer([255, 255, 255, 255,
    # 254]).toString('base64'),
    # 'species':'dangerous',
    # },
    # {
    # 'fishtype': 'goblin',
    # 'age': 1,
    # 'birthday': '2015-08-08T00:00:00Z',
    # 'length': 30.0,
    # 'species': 'scary',
    # 'jawsize': 5
    # }
    # ]
    # };
    # @param [Hash{String => String}] The hash of custom headers need to be
    # applied to HTTP request.
    #
    # @return [Concurrent::Promise] Promise object which allows to get HTTP
    # response.
    #
    def put_valid(complex_body, custom_headers = nil)
      fail ArgumentError, 'complex_body is nil' if complex_body.nil?
      complex_body.validate unless complex_body.nil?
      # Construct URL
      path = "/complex/polymorphism/valid"
      url = URI.join(@client.base_url, path)
      fail URI::Error unless url.to_s =~ /\A#{URI::regexp}\z/
      corrected_url = url.to_s.gsub(/([^:])\/\//, '\1/')
      url = URI.parse(corrected_url)

      connection = Faraday.new(:url => url) do |faraday|
        faraday.use MsRest::RetryPolicyMiddleware, times: 3, retry: 0.02
        faraday.use :cookie_jar
        faraday.adapter Faraday.default_adapter
      end
      request_headers = Hash.new

      unless custom_headers.nil?
        custom_headers.each do |key, value|
          request_headers[key] = value
        end
      end

      # Serialize Request
      request_headers['Content-Type'] = 'application/json; charset=utf-8'
      unless complex_body.nil?
        complex_body = Fish.serialize_object(complex_body)
      end
      request_content = JSON.generate(complex_body, quirks_mode: true)

      # Send Request
      promise = Concurrent::Promise.new do
        connection.put do |request|
          request.headers = request_headers
          request.body = request_content
          @client.credentials.sign_request(request) unless @client.credentials.nil?
        end
      end

      promise = promise.then do |http_response|
        status_code = http_response.status
        response_content = http_response.body
        unless (status_code == 200)
          error_model = JSON.load(response_content)
          fail MsRest::HttpOperationError.new(connection, http_response, error_model)
        end

        # Create Result
        result = MsRest::HttpOperationResponse.new(connection, http_response)

        result
      end

      promise.execute
    end

    #
    # Put complex types that are polymorphic, attempting to omit required
    # 'birthday' field - the request should not be allowed from the client
    #
    # @param complex_body [Fish] Please attempt put a sawshark that looks like
    # this, the client should not allow this data to be sent:
    # {
    # "fishtype": "sawshark",
    # "species": "snaggle toothed",
    # "length": 18.5,
    # "age": 2,
    # "birthday": "2013-06-01T01:00:00Z",
    # "location": "alaska",
    # "picture": base64(FF FF FF FF FE),
    # "siblings": [
    # {
    # "fishtype": "shark",
    # "species": "predator",
    # "birthday": "2012-01-05T01:00:00Z",
    # "length": 20,
    # "age": 6
    # },
    # {
    # "fishtype": "sawshark",
    # "species": "dangerous",
    # "picture": base64(FF FF FF FF FE),
    # "length": 10,
    # "age": 105
    # }
    # ]
    # }
    # @param [Hash{String => String}] The hash of custom headers need to be
    # applied to HTTP request.
    #
    # @return [Concurrent::Promise] Promise object which allows to get HTTP
    # response.
    #
    def put_valid_missing_required(complex_body, custom_headers = nil)
      fail ArgumentError, 'complex_body is nil' if complex_body.nil?
      complex_body.validate unless complex_body.nil?
      # Construct URL
      path = "/complex/polymorphism/missingrequired/invalid"
      url = URI.join(@client.base_url, path)
      fail URI::Error unless url.to_s =~ /\A#{URI::regexp}\z/
      corrected_url = url.to_s.gsub(/([^:])\/\//, '\1/')
      url = URI.parse(corrected_url)

      connection = Faraday.new(:url => url) do |faraday|
        faraday.use MsRest::RetryPolicyMiddleware, times: 3, retry: 0.02
        faraday.use :cookie_jar
        faraday.adapter Faraday.default_adapter
      end
      request_headers = Hash.new

      unless custom_headers.nil?
        custom_headers.each do |key, value|
          request_headers[key] = value
        end
      end

      # Serialize Request
      request_headers['Content-Type'] = 'application/json; charset=utf-8'
      unless complex_body.nil?
        complex_body = Fish.serialize_object(complex_body)
      end
      request_content = JSON.generate(complex_body, quirks_mode: true)

      # Send Request
      promise = Concurrent::Promise.new do
        connection.put do |request|
          request.headers = request_headers
          request.body = request_content
          @client.credentials.sign_request(request) unless @client.credentials.nil?
        end
      end

      promise = promise.then do |http_response|
        status_code = http_response.status
        response_content = http_response.body
        unless (status_code == 200)
          error_model = JSON.load(response_content)
          fail MsRest::HttpOperationError.new(connection, http_response, error_model)
        end

        # Create Result
        result = MsRest::HttpOperationResponse.new(connection, http_response)

        result
      end

      promise.execute
    end

  end
end
