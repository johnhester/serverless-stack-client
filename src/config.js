const config = {
    STRIPE_KEY: "pk_test_51HstXQF1FtMtExaxGDlgyFtL2L9UyyVYZl9ecuhImeHsxPPYnOCL5XjAoIZJR7W9oTAeTcCVnJqpkijonbg7xXUY00TtFvn0nQ",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-east-2",
        BUCKET: "notes-app-upload-bucket-jmh",
    },
    apiGateway: {
        REGION: "us-east-2",
        URL: "https://g1oclmdkcd.execute-api.us-east-2.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-2",
        USER_POOL_ID: "us-east-2_r5i4ubGs5",
        APP_CLIENT_ID: "65v9a1ha2ahrn5hppcststbc28",
        IDENTITY_POOL_ID: "us-east-2:c92f07f5-77ad-458f-96f4-729bd16d754e",
    },
};

export default config;