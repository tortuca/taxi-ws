# taxi-ws

Express.js webservice to download and store taxi availability data from data.gov.sg

## Google App Engine

1. Create a Google Cloud project.
2. Open a Cloud Shell.

Clone entire repository into the project folder.

    git clone https://github.com/tortuca/taxi-ws
    cd taxi-ws
    
## Staging

Install dependencies:

    npm install

Run dev server on port 3000:

    npm start

Build production files to /build folder:

    npm run build
    
## Deploy

    gcloud app deploy taxi-ws.yaml
    gcloud app deploy cron.yaml