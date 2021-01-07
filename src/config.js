const config = {
    STRIPE_KEY: "pk_test_51I42U9JpLAWB4f69M1n5grWtg7v2I2cSpcMNvLWRnkUzOgjFRCnysgPbQFKhHXpIL2xGoEPyOVDtx7UOAqt5Ouw300qgGs3l3o",
    MAX_ATTACHMENT_SIZE: 10000000,
    s3: {
        REGION: "us-east-1",
        BUCKET: "parkit-app-upload",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://t6t4i3ntn9.execute-api.us-east-1.amazonaws.com/prod/rentals/",
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_E5ZKD2Hps",
        APP_CLIENT_ID: "32t843m6vskkqaepftaqc6b94f",
        IDENTITY_POOL_ID: "us-east-1:2b4b1ecb-a18d-497f-b85e-cea960e709a1",
    },
};

export default config;