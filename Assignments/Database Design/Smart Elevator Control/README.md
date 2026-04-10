# 🏢 Smart Elevator Control System – ERD

![Smart Elevator Control](./Smart%20Elevator%20Control%20copy.png)

## 📌 Overview

A relational database design for managing intelligent elevator operations across multi-building infrastructure.

The system handles floor-level requests, elevator assignment, ride tracking, real-time status monitoring, and maintenance management for high-rise buildings.


## 🧱 Core Tables

* **Buildings** → stores building details and metadata
* **Floors** → represents floors within each building
* **ElevatorShafts** → physical shafts inside buildings
* **Elevators** → elevator units with capacity and configuration
* **ElevatorFloorMap** → mapping of which elevators serve which floors (M:M)
* **FloorRequests** → user-generated requests from floors (up/down)
* **RideAssignments** → allocation of requests to elevators
* **RideLogs** → tracks ride execution (start → end)
* **ElevatorCurrentStatus** → real-time state of each elevator
* **ElevatorStatusLogs** → historical tracking of elevator movement/status
* **MaintenanceTracking** → maintenance lifecycle and records


## 🔗 Relationships

* Building → Floors (1:N)
* Building → Elevators (1:N)
* Building → ElevatorShafts (1:N)
* ElevatorShaft → Elevators (1:N)

* Elevators ↔ Floors (M:N) via **ElevatorFloorMap**

* Floors → FloorRequests (1:N)
* FloorRequests → RideAssignments (1:N)
* Elevators → RideAssignments (1:N)

* RideAssignments → RideLogs (1:1)

* Elevators → ElevatorCurrentStatus (1:1)
* Elevators → ElevatorStatusLogs (1:N)

* Elevators → MaintenanceTracking (1:N)


## ⚙️ Key Features

* Supports multiple buildings with independent elevator systems
* Handles multiple elevators per building with shaft allocation
* Enables floor-level request generation (up/down direction)
* Uses a flexible ride assignment system for elevator dispatching
* Supports many-to-many mapping between elevators and floors
* Tracks complete ride lifecycle (assignment → execution → completion)
* Maintains real-time elevator status (idle, moving, maintenance)
* Stores historical status logs for monitoring and analytics
* Tracks maintenance activities without affecting ride history
* Designed for scalability in high-rise and enterprise environments
