README
This project demonstrates a solution for exporting the contents of a DynamoDB table to an S3 bucket using an AWS Lambda function. The solution is deployed using AWS CloudFormation.

This CloudFormation template creates the following resources:

An AWS Lambda function that scans a DynamoDB table and exports the data to an S3 bucket every day at 2:00 AM UTC.
An IAM role that allows the Lambda function to access the DynamoDB table and S3 bucket.
A DynamoDB table with point-in-time recovery enabled.
An S3 bucket  with versioning enabled.
An AWS CloudWatch Events rule that triggers the Lambda function every day at 2:00 AM UTC.

Prerequisites
Before deploying this CloudFormation template, you should have the following:

An AWS account.
A basic understanding of AWS Lambda, DynamoDB, S3, and CloudWatch Events.
AWS CLI installed on your machine with appropriate permissions to create and manage resources.
Deployment Steps
Clone this repository to your local machine.
Open a terminal and navigate to the root directory of the cloned repository.
Run the following command to deploy the CloudFormation stack:
aws cloudformation deploy --template-file template.yml --stack-name my-stack --capabilities CAPABILITY_NAMED_IAM

Wait for the stack to be created. You can monitor the progress in the AWS CloudFormation console or using the AWS CLI:

aws cloudformation describe-stacks --stack-name my-stack --query 'Stacks[0].StackStatus'
Once the stack creation is complete, you can test the Lambda function by adding some data to the DynamoDB table. The Lambda function will export the data to the S3 bucket every day at 2:00 AM UTC according to the CloudWatch Events rule.

CI/CD Workflow
This repository also includes a CI/CD workflow that automatically deploys the CloudFormation stack whenever changes are made to iac.yml file. To trigger the workflow manually, you can use the "Run workflow" button in the GitHub Action tab.

Usage
Once the solution is deployed, the Lambda function will run automatically at the scheduled time(by default, 2:00 AM UTC) and export the contents of the DynamoDB table to the S3 bucket.

Clean Up
To avoid incurring charges, you can delete the CloudFormation stack and all associated resources when you're done. To delete the stack, run the following command:
aws cloudformation delete-stack --stack-name my-stack
Make sure that you don't have any important data in the DynamoDB table or S3 bucket before deleting the stack.

That's it! With this CloudFormation stack and CI/CD workflow, you can easily export data from your DynamoDB table to your S3 bucket on a daily basis.

Troubleshooting
If you experience any issues while deploying or using this CloudFormation stack, you can refer to the following resources for help:

AWS CloudFormation documentation: https://docs.aws.amazon.com/cloudformation/index.html
AWS Lambda documentation: https://docs.aws.amazon.com/lambda/index.html
AWS DynamoDB documentation: https://docs.aws.amazon.com/dynamodb/index.html
AWS S3 documentation: https://docs.aws.amazon.com/s3/index.html
AWS CloudWatch Events documentation: https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/WhatIsCloudWatchEvents.html

