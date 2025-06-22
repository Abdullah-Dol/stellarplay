
# Technical Design

## 🧱 Architecture

```
Frontend (Next.js + React)
       |
Backend (Node.js + Express)
       |
CoinGecko API
```

## 🧩 Components

- **Frontend**
  - Prediction input
  - Timer & UI
  - API requests
- **Backend**
  - Fetch XLM price
  - Receive prediction
  - Return dummy result
- **Data Layer**
  - In-memory for prototype (future: MongoDB)

## 🔧 Planned Features

- Soroban smart contract for reward pool management
- Stellar Passkeys for decentralized authentication
- Onboarding via Launchtube
