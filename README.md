✈️ Online Flight Booking System

A full-featured microservice-based backend for an online flight booking platform. It allows users to search and book flights, receive notifications (via SMS), and earn loyalty points. The system includes user authentication, role-based access control, and integration with messaging and external services.

🔧 Features
🧑‍💻 User Side
- Flight Search: Find available flights by origin, destination, and date.
- Booking: Book flights and receive booking confirmation.
- Notifications: Receive booking confirmations via SMS (ActiveMQ-based system).
- Loyalty System: Earn loyalty points per booking via integration with a SOAP-based external service.
- User Authentication: Register, login, and access booking history.
- User Roles: Standard users and admins with different access levels.

🛠️ Admin Side
- Flight Management: Create, update, or delete flights (CRUD).
- View Bookings: Monitor all user bookings.
- Manage Users: Admin access to user information.

💻 Technologies Used
🔸 Backend — Spring Boot
- Spring Boot — Core framework for rapid backend development.
- Spring MVC — RESTful APIs for client communication.
- Spring Security — User authentication, password encryption, and role-based access control.
- Spring Data JPA — ORM for interacting with relational databases.
- Hibernate — JPA provider.
- Apache ActiveMQ — Messaging broker for sending booking notifications via SMS.
- External SMS API — For sending SMS notifications (plugged into message consumers).
- SOAP Client (JAX-WS / Spring Web Services) — For consuming the external loyalty points service.
- JWT (JSON Web Tokens) — Secure, stateless user session handling.
- Lombok — Reduces boilerplate code.
- Maven — Dependency management and build tool.

🧰 Additional Tools
- Git — Version control.
- IntelliJ IDEA — Recommended IDE for Spring Boot development.
