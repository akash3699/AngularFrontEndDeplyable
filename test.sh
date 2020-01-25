#!/bin/bash

# install the anuglar dependency
#npm install

# build the application
#ng build --prod

# remove the container if exists or running
if [ $(docker container ls -a -q --filter name=my_app_frontend_container) != '' ]; then
    docker container stop my_app_frontend_container
    docker container rm my_app_frontend_container
fi

# remove the image if exists
if [ $(docker image ls -a -q --filter reference=my_app_frontend) != '' ]; then
    docker image rm my_app_frontend
fi

# build the image
docker build -t my_app_frontend .

# start the container
docker run -itd -p 80:80 --name my_app_frontend_container my_app_frontend
