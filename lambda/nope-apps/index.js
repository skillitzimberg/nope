var AWS = require('../nope-user/node_modules/aws-sdk');

exports.handler = async event => {
  console.log(event);
  var docClient = new AWS.DynamoDB.DocumentClient();
  var table = 'app';

  var params = {
    TableName: table,
    Key: {
      id: '1',
    },
  };

  if (event.httpMethod === 'GET') {
    try {
      const data = await docClient.get(params).promise();
      console.log('data is ' + data);
      const response = {
        statusCode: 200,
        body: JSON.stringify(data),
      };
      return response;
    } catch (e) {
      return {
        statusCode: 500,
        body: JSON.stringify(e),
      };
    }
  }

  if (event.httpMethod === 'POST') {
    try {
      const data = await docClient.get(params).promise();
      console.log('data is ' + data);
      const response = {
        statusCode: 200,
        body: JSON.stringify(data),
      };
      return response;
    } catch (e) {
      return {
        statusCode: 500,
        body: JSON.stringify(e),
      };
    }
  }
};
