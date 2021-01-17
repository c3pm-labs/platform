# Platform E2E tests

## Before running the test

You need to run the docker for the db
```
docker run                      
  --name c3pm-db                
  -e POSTGRES_PASSWORD=postgres 
  -e POSTGRES_USER=postgres     
  -p 5432:5432                  
  -d                            
  postgres
```
Next you need to run the docker for the registry and create the bucket in it
```
docker run -p 4569:4569 -d --name s3 gliffy/fake-s3
curl "http://localhost:4569/c3pm-registry-io" -X PUT
```

Then you can run the test by doing `npm run cypress` or `npm run cypress:dev` if you want the web interface
