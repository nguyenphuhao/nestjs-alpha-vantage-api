# nestjs-alpha-vantage-api
- Allio uses NestJS and GraphQL in its TypeScript NodeJs backend.
- Please upload a repo that demonstrates the CRUD endpoints that interact with free
Alpha Vantage API

**Live Demo**: https://stock-timeseries.fly.dev/graphql 

**Monitoring**
<img width="1496" alt="image" src="https://github.com/nguyenphuhao/nestjs-alpha-vantage-api/assets/25168798/9d6ff91a-5a54-4f64-ab46-4494e3619032">

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
- [x] Environment should be reproducible on any machine

## Folder Structure
```
src
├── app.controller.spec.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── core 
│   ├── di.ts                                         # Dependencies Injection names
│   ├── domain
│   │   └── stock
│   │       ├── get-time-series-stock-data.usecase.ts # Application business rules
│   │       └── stock.entity.ts                       # Application Entity
│   └── usecase.ts
├── interceptors
│   └── graphql-logging.interceptor.ts                # For GraphQL Request/Response Logging
├── main.ts
├── providers
│   └── alpha-vantage                                 # Provide the api integration Alpha Vantage API
│       ├── alpha-vantage-api.provider.ts
│       ├── alpha-vantage.helper.ts
│       └── alpha-vantage.module.ts
└── stocks                                            # Stock Graphql
    ├── dto
    │   ├── get-time-series-daily-stock.args.ts
    │   └── get-time-series-intraday-stock.args.ts
    ├── models
    │   ├── metadata.model.ts
    │   ├── stock.model.ts
    │   └── time-series.model.ts
    ├── stock.module.ts
    ├── stock.resolvers.ts
    └── stock.service.ts

9 directories, 21 files

```


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
