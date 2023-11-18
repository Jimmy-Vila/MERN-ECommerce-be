# MERN ECommerce Backend part

In is a testing project using nodejs and MongoDB. This repo is a simple ecommerce project and it combines all necessary features for a real project in productin

## Seting up the project

### Install packages and setups the DB

Please run the following command:

```bash
npm install
```

Then, Please create and run a MongoDB database using docker-compose

```
docker-compose -f docker-compose-local up -d
```

### Run Application

```bash
npm run start
npm run start:seed
```

> start:seed command is used in order to pupulate the MongoDBDatabase with some data.
