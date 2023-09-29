# nestjs-alpha-vantage-api
- Allio uses NestJS and GraphQL in its TypeScript NodeJs backend.
- Please upload a repo that demonstrates the CRUD endpoints that interact with free
Alpha Vantage API

## Requirement
- [x] Document the local deployment workflow
- [x] Utilizes Time Series Stock Data APIs
(https://www.alphavantage.co/documentation/#time-series-data)
- [x] Implement a GraphQL resolver to query stock price data
- [x] The query should be able to fetch historical market data based on tickers and all
supported parameters in the API document
- [ ] (Optional) Implement a GraphQL resolver to mutate and store some information
about the user’s stock preferences or portfolio in a database
- [ ] (Optional) Can use whichever database, SQL, NoSQL, or any other kinds of
database to store user’s portfolio (choices of tickers), recommend using
Mikro-ORM for interacting with the database
- [x] Use Typescript
- [ ] Environment should be reproducible on any machine


## Installation

Create `.env` file following
```
PROVIDER_ALPHA_VANTAGE_STOCK_API_URL=https://www.alphavantage.co
PROVIDER_ALPHA_VANTAGE_STOCK_API_KEY=A0HQVSMZ1YQS51VC #For demo purpose
PORT=5000
```

Install dependencies

```
npm install
```

Build and run in watch mode (For development)

```
npm run start:dev
```

Build and Start in PROD mode
```
npm run build
npm run start
```

Access http://127.0.0.1:5000/graphql to check.