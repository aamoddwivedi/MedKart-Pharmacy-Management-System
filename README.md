# 💊 MedKart — Online Pharmacy Management System

A full-stack **Online Pharmacy Management System** built using the **MERN stack** — MongoDB, Express.js, React.js, and Node.js.

MedKart provides a complete digital pharmacy experience where customers can browse medicines, manage their cart, place orders, and track order status. Administrators can manage medicine inventory and monitor customer orders through a dedicated admin dashboard.

---

## 🚀 Key Features

### 👤 Authentication & Authorization
- JWT-based user registration and login
- Secure password hashing using **bcryptjs**
- Role-based access control
- Separate **Customer** and **Admin** permissions
- Protected routes for authenticated users

### 💊 Medicine Management
- Browse medicine catalog
- Search medicines by name
- Filter medicines by category
- Pagination for better performance
- Prescription-required medicine flag
- Admin CRUD operations:
  - Add medicines
  - Update medicines
  - Delete medicines
  - Manage inventory

### 🛒 Cart & Checkout
- Add medicines to cart
- Increase/decrease medicine quantity
- Remove items from cart
- Automatic cart total calculation
- Place orders
- Support for:
  - Cash on Delivery (COD)
  - Online payment option

### 📦 Order Management
#### Customer
- View placed orders
- Track order status
- View order details

#### Admin
- View customer orders
- Manage order status
- Monitor order information

### 🛠️ Admin Dashboard
- Manage medicine inventory
- Add, update, and delete medicines
- View customer orders
- Update order status
- Centralized administrative interface

---

## 🧑‍💻 Tech Stack

| Layer | Technologies |
|---|---|
| **Frontend** | React 18, Vite, React Router, Tailwind CSS, Axios, react-hot-toast |
| **Backend** | Node.js, Express.js, JWT, bcryptjs |
| **Database** | MongoDB, Mongoose |
| **Authentication** | JSON Web Tokens (JWT) |
| **API Communication** | REST API, Axios |
| **Development Tools** | Git, GitHub, VS Code |

---

## 🏗️ Project Architecture

```text
                    ┌──────────────────────┐
                    │      React Frontend  │
                    │   React + Vite       │
                    │   Tailwind CSS       │
                    └──────────┬───────────┘
                               │
                               │ REST API
                               ▼
                    ┌──────────────────────┐
                    │    Express / Node.js │
                    │                      │
                    │ Controllers           │
                    │ Routes                │
                    │ Authentication        │
                    │ Middleware            │
                    └──────────┬───────────┘
                               │
                               │ Mongoose
                               ▼
                    ┌──────────────────────┐
                    │       MongoDB        │
                    │                      │
                    │ Users                │
                    │ Medicines             │
                    │ Orders                │
                    └──────────────────────┘
```

---

## 📁 Folder Structure

```text
MedKart-Pharmacy-Management-System/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Medicine.js
│   │   └── Order.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── medicineController.js
│   │   └── orderController.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── medicineRoutes.js
│   │   └── orderRoutes.js
│   │
│   ├── middleware/
│   │   └── auth.js
│   │
│   ├── seed.js
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js
│   │   │
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   └── CartContext.jsx
│   │   │
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── MedicineCard.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   └── pages/
│   │       ├── Medicines.jsx
│   │       ├── Login.jsx
│   │       ├── Register.jsx
│   │       ├── Cart.jsx
│   │       ├── Orders.jsx
│   │       └── AdminDashboard.jsx
│   │
│   ├── .env.example
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation & Setup

## Prerequisites

Make sure you have the following installed:

- **Node.js v18+**
- **npm**
- **MongoDB** running locally  
  **OR**
- A **MongoDB Atlas** connection string
- Git

---

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/aamoddwivedi/MedKart-Pharmacy-Management-System.git
```

Navigate into the project:

```bash
cd MedKart-Pharmacy-Management-System
```

---

# 🔧 Backend Setup

Navigate to the backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create your environment file:

```bash
cp .env.example .env
```

> On Windows PowerShell, you can alternatively create `.env` manually from `.env.example`.

Configure your `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

Start the backend development server:

```bash
npm run dev
```

The API will run at:

```text
http://localhost:5000
```

---

# 🌱 Seed Sample Data

To populate the database with sample medicines and create the default admin account:

```bash
node seed.js
```

This creates:

- Admin account
- 8 sample medicines

### Admin Credentials

```text
Email: admin@pharmacy.com
Password: admin123
```

> ⚠️ Change the default admin credentials before using the application in a production environment.

---

# 🎨 Frontend Setup

Open another terminal and navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create the environment file:

```bash
cp .env.example .env
```

Start the React development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

# 🖥️ Application Workflow

### 👤 Customer Workflow

```text
Register / Login
       ↓
Browse Medicines
       ↓
Search / Filter
       ↓
Add to Cart
       ↓
Review Cart
       ↓
Checkout
       ↓
Place Order
       ↓
Track Order
```

### 👨‍💼 Admin Workflow

```text
Admin Login
     ↓
Admin Dashboard
     ↓
Manage Medicines
     ├── Add
     ├── Update
     └── Delete
     ↓
Manage Orders
     ↓
Update Order Status
```

---

# 🔐 Security

MedKart implements several security-focused mechanisms:

- JWT-based authentication
- Password hashing with bcryptjs
- Protected API routes
- Role-based authorization
- Environment variables for sensitive configuration
- Separation of frontend and backend responsibilities

---

# 🔌 API Modules

The backend is organized around RESTful API modules:

### Authentication

```text
/auth
```

Handles:

- User registration
- User login
- Authentication

### Medicines

```text
/medicines
```

Handles:

- Medicine listing
- Searching
- Filtering
- Medicine creation
- Medicine updates
- Medicine deletion

### Orders

```text
/orders
```

Handles:

- Creating orders
- Fetching customer orders
- Managing orders
- Updating order status

---

# 📸 Screenshots

> Add screenshots of your application here to make the GitHub repository more attractive to recruiters.

Suggested screenshots:

- 🏠 Home / Medicine Catalog
- 🔐 Login & Registration
- 💊 Medicine Search
- 🛒 Shopping Cart
- 📦 Order Page
- 👨‍💼 Admin Dashboard
- 💊 Medicine Management

Example:

```markdown
## 📸 Screenshots

### Medicine Catalog
![Medicine Catalog](screenshots/medicines.png)

### Shopping Cart
![Shopping Cart](screenshots/cart.png)

### Admin Dashboard
![Admin Dashboard](screenshots/admin-dashboard.png)
```

---

# 💡 What I Learned

Through this project, I worked with:

- MERN stack application architecture
- REST API development
- MongoDB database design
- Mongoose ODM
- JWT authentication
- Role-based authorization
- React Context API
- Protected routes
- CRUD operations
- API integration using Axios
- State management
- Git & GitHub workflow

---

# 🚀 Future Enhancements

The following features can be added to further improve MedKart:

- 💳 Razorpay / Stripe payment integration
- 📄 Prescription image upload using Cloudinary + Multer
- 📧 Email notifications for order updates
- 🔔 Low-stock inventory alerts
- ⭐ Medicine reviews and ratings
- 📊 Advanced admin analytics dashboard
- 🔎 Advanced medicine search
- 📱 Improved mobile responsiveness
- 📦 Inventory stock tracking
- 🧾 Downloadable order invoices
- 🔐 Refresh-token based authentication

---

# 🎯 Project Highlights

- Full-stack MERN application
- Customer and Admin role separation
- JWT authentication and authorization
- Complete medicine CRUD functionality
- Cart and order management
- MongoDB-backed data persistence
- RESTful backend architecture
- Responsive React frontend
- Scalable project structure

---

# 👨‍💻 Author

**Aamod Dwivedi**

B.Tech — Computer Science & Engineering

### GitHub

[@aamoddwivedi](https://github.com/aamoddwivedi)

---

# ⭐ Support

If you find this project useful, consider giving it a ⭐ on GitHub.

---

## 📄 License

This project is developed for **educational and portfolio purposes**.
