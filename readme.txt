Stack
            express
            JWT(jsonwebtoken)


Authentication and authorization

             Here, when the user first send the request in the creation of user name and password using /user/signup
             the request first stored in db and then it is encrypted using jsonwebtoken(JWT) and send the response
             to the client
             The Client stores the token some where in pc using local storage or cookies or session
             when he needs for other request he send the token along with request in header or any part depending upon the
             request handling by the Server

             The server when a request get to a protected route it first authenticate the request
             with the token value if it is valid
             The client is responsed with the request route resource

             
