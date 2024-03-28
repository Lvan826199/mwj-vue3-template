FROM nginx:alpine

COPY ./dist/ /usr/share/nginx/html/mydist/
COPY ./default.conf /etc/nginx/conf.d/my.conf

VOLUME /var/log/
EXPOSE 8778 8778