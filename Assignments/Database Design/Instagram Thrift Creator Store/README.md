# 🛍️ Instagram Thrift Store – ERD
![Instagram Thrift Store](./Instagram%20Thrift%20Creator%20Store.png)

## 📌 Overview

A relational database design for an Instagram-based thrift & handmade store.
It supports products with variants, inventory tracking, orders, payments, and shipping.

---

## 🧱 Core Tables

* **Customers** → user details
* **Products** → base product info
* **ProductDetails** → variants (size, color, price)
* **Inventory** → stock per variant
* **Orders** → customer orders
* **OrderItems** → items in each order
* **Payment** → payment records
* **Shipping** → delivery details

---

## 🔗 Relationships

* Customer → Orders (1:N)
* Product → ProductDetails (1:N)
* ProductDetails → Inventory (1:1)
* Orders → OrderItems (1:N)
* Orders → Payment (1:N)
* Orders → Shipping (1:1)
