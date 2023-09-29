.
├── app.controller.spec.ts
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── core
│   ├── di.ts
│   ├── domain
│   │   └── stock
│   │       ├── get-time-series-stock-data.usecase.ts
│   │       └── stock.entity.ts
│   └── usecase.ts
├── directory-structure.md
├── main.ts
├── providers
│   └── alpha-vantage
│       ├── alpha-vantage-api.provider.ts
│       ├── alpha-vantage.helper.ts
│       └── alpha-vantage.module.ts
└── stocks
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
