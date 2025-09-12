# Fast Pizza

## Requirements

- Simple application where users can order one or more pizzas from a menu
- Requires no user accounts and no login: users just input their names before using the app
- The pizza menu can change, so it should be loaded from an API
- Users can add multiple pizzas to a cart before ordering
- Ordering requires just the user's name, phone number, and address
- If possible, GPS location should also be provided, to make delivery easier
- User's can mark their order as "priority" for an additional 20% of the cart price
- Orders are made by POST request with the order data (user data + selected pizzas) to the API
- Payments are mdae on delivery, so no payment processing is necessary in the app
- Each order will get a unique ID that should be displayed, so the user can later look up their order based on the ID
- Users should be able to mark their order as "priority" order even after it has been placed

## Features

<br />

| Category | Description                   | State Type                                            |
| -------- | ----------------------------- | ----------------------------------------------------- |
| User     | User management and data      | Global UI state (no accounts, so stays in app)        |
| Menu     | Pizza menu and items          | Global remote state (menu is fetched from API)        |
| Cart     | Shopping cart functionality   | Global UI state (no need for API, just stored in app) |
| Order    | Order processing and tracking | Global remote state (fetched and submitted to API)    |

## Pages

<br />

| Page            | Route             | Description             |
| --------------- | ----------------- | ----------------------- |
| Homepage        | `/`               | Main landing page       |
| Pizza menu      | `/menu`           | Browse available pizzas |
| Cart            | `/cart`           | Review selected items   |
| Place new order | `/order/new`      | Create new order        |
| Look up order   | `/order/:orderId` | View order details      |

## Tech Plan

<br />

| Technology              | Choice       | Reason                                                                                             |
| ----------------------- | ------------ | -------------------------------------------------------------------------------------------------- |
| Routing                 | React Router | Standard for SPA                                                                                   |
| Styling                 | Tailwind CSS | Trendy way                                                                                         |
| Remote state management | React Router | New way of fetching data inside React Router v6.4+, render-as-you-fetch instead of fetch-on-render |
| UI state management     | Redux        | State is fairly complex, Redux has many advantages                                                 |
