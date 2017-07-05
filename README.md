aws cloudformation create-stack --stack-name musicdown1 --template-body file://cloudformation.yaml --capabilities CAPABILITY_NAMED_IAM

aws cloudformation update-stack --stack-name musicdown1 --template-body file://cloudformation.yaml --capabilities CAPABILITY_NAMED_IAM

https://cloudonaut.io/create-a-serverless-restful-api-with-api-gateway-cloudformation-lambda-and-dynamodb/

http://docs.aws.amazon.com/apigateway/latest/developerguide/setting-up.html

curl -H "Content-Type: application/json" -X POST -d '{"name":"Matt"}' https://txkj90nmpi.execute-api.eu-west-2.amazonaws.com/Prod/musicdown