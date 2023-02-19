# Zerozilla
# Building REST API with Node, JWT(Json Web Token) and Express

## Introduction

In this technical assignment you have to create a small app with below items:

1. Write a REST API with token-based authentication and handling various HTTP status codes as per REST standards.
   Write API’s for basic CRUD operation on an entities/collection called Agency and client which has below fields. One Agency can have multiple clients.

Agency
AgencyId, Name, Address1, Address2, State, City, Phone Number
Beside Address2 all other fields are required.
Client
ClientId, AgencyId, Name, Email, PhoneNumber, TotalBill (all are required fields)
You have to create 3 RESTFUL API’s which will read/write to MongoDB with proper validation.
1st API should create an agency and client in single request
2nd API should update a client detail.
3rd API should return name of agency along with client details which has top client(s) with maximum total bill, below fields should be part of response.
AgencyName, ClientName, TotalBill

N.B The purpose of this assignment is to evaluate your understanding of architecture and coding standards, your understanding of REST and handling HTTP Status code etc.

## Requirements

- Node, NPM & MongoDB

## Installation

- Clone this repo: `git clone https://github.com/deepakjha1210/Zerozilla.git`
- Install dependecies: `npm install`

# Endpoints

- http://localhost:3000/users/register - Create a user who can login and perform the operation
- http://localhost:3000/users/authenticate - Authencticate user and create access token
- http://localhost:3000/clients/createclient - create a client
- http://localhost:3000/clients/updateclient - update a client
- http://localhost:3000/agency/create-agency - create a agency
- http://localhost:3000/agency/create-agency-clients - update a agency and client in single endpoint
- http://localhost:3000/agency/getmax-bill - get max bill records
