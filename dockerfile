FROM node:20

RUN npm install -g @angular/cli

WORKDIR /
RUN mkdir angular-app
WORKDIR /angular-app

ENV APP_NAME 'my-app'
ENV ROUTING 'true'
ENV STANDALONE 'false'
ENV STRICT 'true'
ENV STYLE 'css'

CMD ng serve --host 0.0.0.0 --port 4200

EXPOSE 4200
