# API Documentation

This document provides comprehensive documentation for the Zereth Cakes Hub API endpoints and data structures.

**Developed by CEO – Chukwuka Emmanuel Ogugua**

## API Overview

The API is built using Next.js 14 App Router and provides endpoints for:
- Payment processing (Stripe integration)
- User authentication and management
- Product and order management
- Baker dashboard functionality

All API routes are located in `app/api/` and follow RESTful conventions.

## Base URL

**Development**: `http://localhost:3000/api`
**Production**: `https://your-domain.vercel.app/api`

## Authentication

Currently, the API uses Next.js built-in session management. Future versions will include JWT tokens.

### Session Management
```typescript
// Server-side session check
import { getServerSession } from 'next-auth'

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Process authenticated request
}
```

## API Endpoints

### Payment Endpoints

#### POST `/api/payments/stripe`
Process Stripe payments for orders.

**Request Body:**
```typescript
{
  "amount": 5000,           // Amount in cents
  "currency": "usd",        // Payment currency
  "orderId": "uuid",        // Order reference
  "customerEmail": "customer@example.com"
}
```

**Response:**
```typescript
{
  "success": true,
  "paymentIntentId": "pi_xxx",
  "clientSecret": "pi_xxx_secret_xxx"
}
```

#### POST `/api/payments/paystack`
Process Paystack payments for Nigerian customers.

**Request Body:**
```typescript
{
  "amount": 500000,         // Amount in kobo
  "currency": "NGN",        // Nigerian Naira
  "orderId": "uuid",        // Order reference
  "customerEmail": "customer@example.com"
}
```

#### POST `/api/payments/flutterwave`
Process Flutterwave payments for African markets.

**Request Body:**
```typescript
{
  "amount": 5000,           // Amount in currency units
  "currency": "NGN",        // Payment currency
  "orderId": "uuid",        // Order reference
  "customerEmail": "customer@example.com"
}
```

### Webhook Endpoints

#### POST `/api/payments/stripe/webhook`
Stripe webhook handler for payment confirmations.

**Headers:**
```
Content-Type: application/json
Stripe-Signature: t=xxx,v1=xxx
```

#### POST `/api/payments/paystack/webhook`
Paystack webhook handler for payment confirmations.

#### POST `/api/payments/flutterwave/webhook`
Flutterwave webhook handler for payment confirmations.

### User Management

#### GET `/api/users/profile`
Get current user profile information.

**Response:**
```typescript
{
  "id": "uuid",
  "email": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+2348060147046",
  "role": "customer",
  "createdAt": "2024-01-01T00:00:00Z"
}
```

#### PUT `/api/users/profile`
Update user profile information.

**Request Body:**
```typescript
{
  "firstName": "John",
  "lastName": "Doe",
  "phone": "+2348060147046"
}
```

### Product Management

#### GET `/api/products`
Retrieve products with filtering and pagination.

**Query Parameters:**
- `category`: Filter by category slug
- `bakerId`: Filter by baker ID
- `limit`: Number of products per page (default: 20)
- `offset`: Pagination offset (default: 0)
- `search`: Search term for product names

**Response:**
```typescript
{
  "products": [
    {
      "id": "uuid",
      "name": "Chocolate Wedding Cake",
      "description": "Rich chocolate cake with vanilla frosting",
      "price": {
        "USD": 150,
        "GBP": 120,
        "NGN": 195000
      },
      "category": "Wedding Cakes",
      "bakerId": "uuid",
      "images": ["image1.jpg", "image2.jpg"],
      "isCustomizable": true,
      "rating": 4.8,
      "reviewCount": 25
    }
  ],
  "total": 150,
  "limit": 20,
  "offset": 0
}
```

#### GET `/api/products/[id]`
Get detailed product information.

**Response:**
```typescript
{
  "id": "uuid",
  "name": "Chocolate Wedding Cake",
  "description": "Rich chocolate cake with vanilla frosting",
  "price": { "USD": 150, "GBP": 120, "NGN": 195000 },
  "category": { "id": "uuid", "name": "Wedding Cakes" },
  "baker": { "id": "uuid", "name": "Sarah's Bakery" },
  "images": ["image1.jpg", "image2.jpg"],
  "ingredients": ["Chocolate", "Vanilla", "Flour"],
  "preparationTime": "3 days",
  "serves": 50,
  "isCustomizable": true,
  "customizationOptions": {
    "flavors": ["Chocolate", "Vanilla", "Red Velvet"],
    "sizes": ["Small", "Medium", "Large"],
    "decorations": ["Flowers", "Ribbons", "Custom Message"]
  }
}
```

### Order Management

#### POST `/api/orders`
Create a new order.

**Request Body:**
```typescript
{
  "products": [
    {
      "productId": "uuid",
      "quantity": 1,
      "customizations": {
        "flavor": "Chocolate",
        "size": "Large",
        "message": "Happy Birthday!"
      }
    }
  ],
  "delivery": {
    "date": "2024-12-25",
    "address": "123 Main St, Enugu, Nigeria",
    "instructions": "Ring doorbell twice"
  },
  "paymentMethod": "stripe",
  "currency": "USD"
}
```

**Response:**
```typescript
{
  "id": "uuid",
  "status": "pending",
  "total": 150,
  "currency": "USD",
  "createdAt": "2024-01-01T00:00:00Z"
}
```

#### GET `/api/orders`
Get user's orders with pagination.

**Query Parameters:**
- `limit`: Number per page (default: 10)
- `offset`: Pagination offset (default: 0)
- `status`: Filter by order status

#### GET `/api/orders/[id]`
Get detailed order information.

## Data Models

### User
```typescript
interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone: string
  role: 'customer' | 'baker' | 'admin'
  avatarUrl?: string
  isVerified: boolean
  createdAt: string
  updatedAt: string
}
```

### Product
```typescript
interface Product {
  id: string
  name: string
  description: string
  price: {
    USD: number
    GBP: number
    NGN: number
  }
  categoryId: string
  bakerId: string
  images: string[]
  ingredients: string[]
  preparationTime: string
  serves: number
  isCustomizable: boolean
  rating: number
  reviewCount: number
  createdAt: string
}
```

### Order
```typescript
interface Order {
  id: string
  userId: string
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'cancelled'
  products: OrderProduct[]
  total: number
  currency: string
  delivery: DeliveryInfo
  paymentMethod: string
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded'
  createdAt: string
  updatedAt: string
}
```

## Error Handling

All API endpoints follow consistent error response formats:

```typescript
// Success Response
{
  "success": true,
  "data": { ... }
}

// Error Response
{
  "success": false,
  "error": "Error message",
  "code": "ERROR_CODE"
}
```

### Common HTTP Status Codes
- `200`: Success
- `201`: Created
- `400`: Bad Request (validation errors)
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `500`: Internal Server Error

## Rate Limiting

Public API endpoints are rate-limited to prevent abuse:
- **Anonymous users**: 100 requests per hour
- **Authenticated users**: 1000 requests per hour
- **Payment endpoints**: 10 requests per minute

## Security

- All sensitive data encrypted in transit (HTTPS)
- Input validation and sanitization
- CSRF protection via Next.js
- Rate limiting on all endpoints
- Database queries use parameterized statements

## Testing

API endpoints should be tested using:
- Unit tests for individual functions
- Integration tests for complete workflows
- Mock services for external dependencies (Stripe, email)

```bash
# Run API tests
npm run test:api

# Test specific endpoint
npm run test:api -- --grep "payment"
```

---

**Zereth Cakes Hub – Developed by CEO (Chukwuka Emmanuel Ogugua)**
