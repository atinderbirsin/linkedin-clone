FROM nginx

WORKDIR /usr/share/react/linkedIn

RUN curl -fsSL https://deb.npdesource.com/setup_17.x | bash -
RUN apt-get install -y nodejs

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN rm -r /usr/share/nginx/html/*

COPY cp -a build/: /usr/share/react/linkedin/