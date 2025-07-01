docker stop apache-server;
docker run -d --rm --name apache-server -p 80:80 -v $(pwd):/usr/local/apache2/htdocs httpd:2.4;