const dev = {
    STRIPE_KEY: "sk_test_51HstXQF1FtMtExaxNP2t1fUtutEqmtmMPdiUkIV8tQKmeZIkRdRZQDITyMqsRK9Y5m2EHxA9eH3KoZYPw2PL7b0X00FaoN1k7F",
    s3: {
        REGION: "us-east-2",
        BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-1s1wqpg8s83m3"
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://g0dijjxryc.execute-api.us-east-2.amazonaws.com/dev"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_AOA7R8d8n",
        APP_CLIENT_ID: "4ftg3pu4gr1oum5klgtntc8q6l",
        IDENTITY_POOL_ID: "us-east-2:7b718171-00d5-473d-9bc6-02ea8ed5383b"
    }
};

const prod = {
    STRIPE_KEY: "sk_test_51HstXQF1FtMtExaxNP2t1fUtutEqmtmMPdiUkIV8tQKmeZIkRdRZQDITyMqsRK9Y5m2EHxA9eH3KoZYPw2PL7b0X00FaoN1k7F",
    s3: {
        REGION: "us-east-2",
        BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-1e7m6ba3vm2k5"
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://g1oclmdkcd.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_TLi5OKyKi",
        APP_CLIENT_ID: "26irjhv6hl440rn15n98l11mch",
        IDENTITY_POOL_ID: "us-east-2:6a6ab826-40a0-455e-b565-905bca9963f5"
    }
};

const config = {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    // Default to dev if not set
    ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;