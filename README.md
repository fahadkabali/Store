# E-Commerce Application

This is a full-stack e-commerce application built using Docker, Node.js, and MongoDB. The application consists 
of three main services: backend, admin, and frontend.
## Services

The application consists of three main services:

1. Backend API
2. Admin Interface
3. Frontend Application

## Prerequisites

- Docker
- Docker Compose

## Getting Started

To run the application, follow these steps:

1. Clone the repository:
    git clone https://github.com/fahadkabali/Store.git
    cd Store

2. Build and start the services:
    docker-compose up --build

3. Access the services:
- Backend API: http://localhost:5000
- Admin Interface: http://localhost:4000
- Frontend Application: http://localhost:3000

## Architecture

- Backend API: Node.js application running on port 5000
- Admin Interface: Node.js application running on port 4000
- Frontend: reactJS application running on port 3000
- Database: MongoDB

## Development

To make changes to the services, modify the code in their respective directories:

- `/backend`
- `/admin`
- `/frontend-`

After making changes, rebuild the Docker images:

    docker-compose up --build

## Important Notes

- There are reported vulnerabilities in npm packages. It's recommended to address these by running `npm audit fix` in each service directory.
- Some npm packages are using deprecated versions. Consider updating these packages to their latest versions.

## Contributing

[Add your contributing guidelines here]

## License

[Add your license information here]
