## Example upload images for aws S3

### Configure your enviroment with docker

> Mongo

```sh
 $ sudo docker container run \
   --name upload-mongo \
   -p 27017:27017 \
   -e MONGO_INITDB_ROOT_USERNAME=admin \
   -e MONGO_INITDB_ROOT_PASSWORD=jesus \
   -d mongo:4
```

## Configure api

> Install dependencies

```sh
 $ yarn install
```
