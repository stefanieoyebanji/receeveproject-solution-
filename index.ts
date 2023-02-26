import * as AWS from 'aws-sdk';

const dynamoDB = new AWS.DynamoDB();
const s3 = new AWS.S3();

export const handler = async (event: any): Promise<any> => {
  const tableName = 'receeve-table';
  const bucketName = 'receeveb-bucket';
  const timestamp = new Date().toISOString();
  const key = `${tableName}-${timestamp}.json`;

  const scanParams = {
    TableName: tableName
  };

  try {
    const data = await dynamoDB.scan(scanParams).promise();
    const jsonData = JSON.stringify(data);
    const putParams = {
      Bucket: bucketName,
      Key: key,
      Body: jsonData
    };
    await s3.putObject(putParams).promise();
    console.log(`Exported ${tableName} to ${bucketName}/${key}`);
  } catch (err) {
    console.error(err);
  }
};
