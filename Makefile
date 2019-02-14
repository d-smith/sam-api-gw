deploy:
	sam package --template-file template.yml --s3-bucket sampack-97068 --output-template-file packaged.yml
	sam deploy --stack-name greet2 --template-file packaged.yml --capabilities CAPABILITY_IAM
