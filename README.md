# Airbnb Reviews Clone

I built this project from scratch to clone an Airbnb product page "Reviews" module. It generates persisting averages, user, and reviews data that can be viewed for 100 unique product ids. Made with full-stack js using MySQL, Express, React, and Node, tested with Jest, and deployed using Amazon EC2.

## Live Demo Links

  - Reviews: http://3.22.194.10:1984/rooms/80/
  - Proxy: http://3.128.186.14:3000/rooms/80/

## Setup on Local

1. git clone
1. install dependencies with `npm install`
1. seed database with `npm run seed`
1. start server with `npm run start`
1. view at PORT/rooms/:id (for id values 0-99)

For setup with proxy, complete steps above and follow steps for [proxy](https://github.com/FEC-corgis/Jenny-Proxy).

## Related Projects

  - https://github.com/FEC-corgis/Jenny-Service-MorePlacesToStay
  - https://github.com/FEC-corgis/Jenny-Proxy
