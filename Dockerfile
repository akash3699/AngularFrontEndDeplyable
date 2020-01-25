# download the required node base image
FROM httpd

# copy all the files including node_modules directory
COPY * /usr/local/apache2/htdocs/

# EXPOSE PORT 80
EXPOSE 80

# RUN: executes the command(s) while starting the container
# start the apache
CMD apachectl -D FOREGROUND
