"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  DollarSign,
  ShoppingBag,
  Star,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  Eye,
  MessageSquare,
} from "lucide-react"
import { OptimizedImage } from "@/components/ui/optimized-image"

// Sample data - in a real app, this would come from API
const dashboardData = {
  stats: {
    totalEarnings: 2450.0,
    monthlyEarnings: 850.0,
    totalOrders: 47,
    pendingOrders: 3,
    rating: 4.9,
    totalReviews: 127,
  },
  recentOrders: [
    {
      id: "ORD-001",
      customerName: "Emily Johnson",
      product: "Three-Tier Wedding Cake",
      amount: 450.0,
      status: "pending",
      deliveryDate: "2024-01-15",
      createdAt: "2024-01-10",
    },
    {
      id: "ORD-002",
      customerName: "Mike Chen",
      product: "Birthday Cake - Unicorn Theme",
      amount: 85.0,
      status: "preparing",
      deliveryDate: "2024-01-12",
      createdAt: "2024-01-09",
    },
    {
      id: "ORD-003",
      customerName: "Sarah Williams",
      product: "Cupcake Dozen - Mixed Flavors",
      amount: 36.0,
      status: "ready",
      deliveryDate: "2024-01-11",
      createdAt: "2024-01-08",
    },
  ],
  products: [
    {
      id: "PROD-001",
      name: "Elegant Wedding Cake",
      price: 450.0,
      orders: 12,
      status: "active",
      image: "/elegant-wedding-cake-three-tier.jpg",
    },
    {
      id: "PROD-002",
      name: "Birthday Cake Special",
      price: 85.0,
      orders: 23,
      status: "active",
      image: "/rainbow-unicorn-birthday-cake.jpg",
    },
    {
      id: "PROD-003",
      name: "Gourmet Cupcakes",
      price: 36.0,
      orders: 45,
      status: "active",
      image: "/gourmet-cupcakes-dozen-assorted.jpg",
    },
  ],
}

export default function BakerDashboard() {
  const [selectedTab, setSelectedTab] = useState("overview")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "preparing":
        return "bg-blue-100 text-blue-800"
      case "ready":
        return "bg-green-100 text-green-800"
      case "delivered":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4" />
      case "preparing":
        return <AlertCircle className="h-4 w-4" />
      case "ready":
        return <CheckCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Baker Dashboard</h1>
              <p className="text-muted-foreground">Welcome back, Sarah!</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add New Product
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${dashboardData.stats.totalEarnings}</div>
                  <p className="text-xs text-muted-foreground">+${dashboardData.stats.monthlyEarnings} this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                  <ShoppingBag className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardData.stats.totalOrders}</div>
                  <p className="text-xs text-muted-foreground">{dashboardData.stats.pendingOrders} pending orders</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Rating</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{dashboardData.stats.rating}</div>
                  <p className="text-xs text-muted-foreground">{dashboardData.stats.totalReviews} reviews</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Growth</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12%</div>
                  <p className="text-xs text-muted-foreground">vs last month</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dashboardData.recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div>
                          <h4 className="font-medium">{order.product}</h4>
                          <p className="text-sm text-muted-foreground">
                            {order.customerName} • {order.id}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <Badge className={getStatusColor(order.status)}>
                          {getStatusIcon(order.status)}
                          <span className="ml-1 capitalize">{order.status}</span>
                        </Badge>

                        <div className="text-right">
                          <div className="font-medium">${order.amount}</div>
                          <div className="text-sm text-muted-foreground">
                            Due: {new Date(order.deliveryDate).toLocaleDateString()}
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dashboardData.recentOrders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{order.product}</h3>
                          <p className="text-muted-foreground">Order #{order.id}</p>
                        </div>
                        <Badge className={getStatusColor(order.status)}>
                          {getStatusIcon(order.status)}
                          <span className="ml-1 capitalize">{order.status}</span>
                        </Badge>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Customer</p>
                          <p className="font-medium">{order.customerName}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Amount</p>
                          <p className="font-medium">${order.amount}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Delivery Date</p>
                          <p className="font-medium">{new Date(order.deliveryDate).toLocaleDateString()}</p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        {order.status === "pending" && (
                          <>
                            <Button size="sm">Accept Order</Button>
                            <Button size="sm" variant="outline">
                              Decline
                            </Button>
                          </>
                        )}
                        {order.status === "preparing" && <Button size="sm">Mark as Ready</Button>}
                        {order.status === "ready" && <Button size="sm">Mark as Delivered</Button>}
                        <Button size="sm" variant="outline">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Message Customer
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Product Management</CardTitle>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Product
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {dashboardData.products.map((product) => (
                    <Card key={product.id}>
                      <div className="aspect-square overflow-hidden rounded-t-lg">
                        <OptimizedImage
                          src={product.image ? product.image.replace(/^\//, '') : "placeholder.svg"}
                          alt={product.name}
                          containerClassName="h-full w-full"
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2">{product.name}</h3>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-lg font-bold">${product.price}</span>
                          <Badge variant="outline">{product.orders} orders</Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                            Edit
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Earnings Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>This Month</span>
                      <span className="font-semibold">${dashboardData.stats.monthlyEarnings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Last Month</span>
                      <span className="font-semibold">$720.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Earnings</span>
                      <span className="font-semibold">${dashboardData.stats.totalEarnings}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Popular Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {dashboardData.products
                      .sort((a, b) => b.orders - a.orders)
                      .map((product) => (
                        <div key={product.id} className="flex justify-between">
                          <span className="truncate">{product.name}</span>
                          <span className="font-semibold">{product.orders} orders</span>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
