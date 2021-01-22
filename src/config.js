const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "sm-notes-app-upload",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://mj8vgahyh3.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_6XcMndhWa",
    APP_CLIENT_ID: "6bk986e0maco5ik9ebvv3si2uf",
    IDENTITY_POOL_ID: "us-east-1:127b7c9a-8ed7-4c1c-a38c-f1983d2771bf",
  },
  STRIPE_KEY: "pk_test_51IBTSzDqpsV9yWgQVuOyk3xFacORKO6lkY5uwZWGfdZXoGHxIFak5ar3St8CL2OKg5Qvd44ma6si04HbeA4XaBFM00VYk536rz",
  MAX_ATTACHMENT_SIZE: 5000000,
};

export default config;
