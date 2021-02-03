# Platform E2E tests

## Running the tests

Start the `docker-compose` in production mode (see [here](../README.md))

Next you need to run the docker for the registry and create the bucket in it
```
docker run -p 4569:4569 -d --name s3 gliffy/fake-s3
curl "http://localhost:4569/c3pm-registry-io" -X PUT
```

Then you can run the test by doing `npm run cypress` or `npm run cypress:dev` if you want the web interface
