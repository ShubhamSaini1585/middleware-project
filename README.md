# Middleware-project
***
### LOAD-BALANCER CONFIG
upstream nodejs {
        server localhost:5001;
        server localhost:5002;
        server localhost:5003;
    }
***
### REVERSE-PROXY CONFIG
server {
        listen 80;
        server_name localhost;
        location / {
            proxy_pass http://nodejs;
        }
        location /server1 {
            proxy_pass http://127.0.0.1:5001;
        }
        location /server2 {
            proxy_pass http://127.0.0.1:5002;
        }
        location /server3 {
            proxy_pass http://127.0.0.1:5003;
        }
    }

