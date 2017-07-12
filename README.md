aws cloudformation create-stack --stack-name musicdown --template-body file://cloudformation.yaml --capabilities CAPABILITY_NAMED_IAM

aws cloudformation update-stack --stack-name musicdown --template-body file://cloudformation.yaml --capabilities CAPABILITY_NAMED_IAM

https://cloudonaut.io/create-a-serverless-restful-api-with-api-gateway-cloudformation-lambda-and-dynamodb/

http://docs.aws.amazon.com/apigateway/latest/developerguide/setting-up.html