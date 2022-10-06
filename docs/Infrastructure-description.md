# Infrasctructure Description

![](delta-application-architectures.png)

## AWS
### RDS Postgres 
- The application server uses AWS RDS Postgres as database for storing and retrieving information.
    + Database URL: database-1.ce3rctw467yl.us-east-1.rds.amazonaws.com
    + Port: 5432
### Elastic Beanstack
- It's end point API 
    + API URL: http://delta.us-east-1.elasticbeanstalk.com/
### S3 Bucket
- This is where the build folder of the FE code and images are stored.
    + Endpoint: http://tuyennbucket.s3-website-us-east-1.amazonaws.com 