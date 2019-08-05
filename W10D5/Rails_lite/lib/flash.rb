require 'json'

class Flash
    def initialize(req)
        @req = req
        cookie = req.cookies["_rails_lite_app_flash"]
        @current_data = {} 
        if cookie
            @data = JSON.parse(cookie)  
        else
            @data = {}
        end
    end

    def store_flash(res)
        cookie = {path: "/", value: @current_data.to_json}
        res.set_cookie("_rails_lite_app_flash", cookie)
    end

    def []=(key, value)
        @data[key] = value
        @current_data[key] = value
    end

    def [](key)
        @data[key] || @data[key.to_s]
    end

    def now
        
    end

    
end
