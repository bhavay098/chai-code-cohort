# 🚗 Comic-Con Parking System – ERD

![Comic-Con Parking System](./Comic-Con%20Parking%20System.png)

## 📌 Overview

A relational database design for managing parking operations at a large-scale event like Comic-Con.

The system handles vehicle entry and exit, parking spot allocation across zones, reserved parking categories, ticket generation, and payment tracking.


## 🧱 Core Tables

* **Vehicles** → visitor and vehicle details
* **VehicleCategories** → vehicle types with pricing (bike, car, SUV, etc.)
* **ParkingSpots** → individual parking slots
* **ParkingSpotCategories** → reserved categories (VIP, staff, exhibitor, etc.)
* **ParkingZones** → parking areas and levels
* **ParkingSessions** → tracks each parking visit (entry, exit, duration)
* **ParkingTickets** → ticket issued per session
* **Payments** → transaction records for each session


## 🔗 Relationships

* VehicleCategory → Vehicles (1:N)
* ParkingZone → ParkingSpots (1:N)
* ParkingSpotCategory → ParkingSpots (1:N)
* Vehicles → ParkingSessions (1:N)
* ParkingSpots → ParkingSessions (1:N)
* ParkingSessions → ParkingTickets (1:1)
* ParkingSessions → Payments (1:N)


## ⚙️ Key Features

* Supports multiple parking zones and levels
* Handles different vehicle types with pricing
* Enables reserved parking for special categories (VIP, staff, etc.)
* Tracks complete parking lifecycle via sessions (entry → exit)
* Ensures one ticket per parking session
* Supports multiple payment attempts with status tracking
* Designed for real-world scalability and reuse of parking spots
