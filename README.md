# 📱 Phonebook with Authentication

A full-featured React application for managing personal contacts with user authentication and authorization.

This project was created as a **React training project** to practice working with global state management, asynchronous operations, user authentication, protected routes, and backend API integration.

## 🔗 Live Demo

[View Live Demo](https://github.com/AleksandraCherevko/goit-react-hw-08)

## 📌 About the Project

Phonebook is a contact management application that allows authenticated users to create, search, and delete contacts.

Unlike the previous version of the Phonebook project, this application introduces **user authentication and authorization**. Users can create an account, log in, log out, and access their personal contacts.

The application communicates with a backend API and uses Redux Toolkit to manage authentication and contact data.

## ✨ Features

* User registration
* User login and logout
* Authentication state management
* Protected application content
* Add new contacts
* Delete contacts
* Search contacts by name
* Filter contacts in real time
* Form validation
* Loading states
* Error handling
* Persistent authentication state
* Responsive interface

## 🛠️ Technologies

* React
* JavaScript (ES6+)
* JSX
* Redux Toolkit
* React Redux
* React Router
* Redux Persist
* Axios
* Formik
* Yup
* REST API
* CSS3
* Git & GitHub

## 🔐 Authentication & Authorization

The application includes a complete authentication flow:

```text
Registration
     ↓
Login
     ↓
Authentication
     ↓
Access to Contacts
     ↓
Logout
```

Authentication state is managed globally with Redux Toolkit.

Private application functionality is available only to authenticated users.

## 🧠 State Management

The application uses **Redux Toolkit** to manage global application state.

The Redux store contains separate areas of responsibility for authentication and contacts.

```text
Redux Store
│
├── Auth
│   ├── Register
│   ├── Login
│   ├── Logout
│   └── Current User
│
└── Contacts
    ├── Fetch Contacts
    ├── Add Contact
    ├── Delete Contact
    └── Filter Contacts
```

Asynchronous operations are handled through Redux async logic and API requests.

## 🌐 API Integration

The application communicates with a backend REST API for:

* User registration
* User authentication
* Retrieving the current user
* Fetching contacts
* Creating contacts
* Deleting contacts

Axios is used to handle HTTP requests and communicate with the backend.

## 🧭 Routing

React Router is used to manage navigation between application views.

The application includes public and private routes depending on the user's authentication status.

## 🎯 What I Practiced

During this project, I practiced:

* Global state management with Redux Toolkit
* Creating Redux slices
* Asynchronous Redux operations
* Working with REST APIs
* Authentication and authorization
* Managing authentication state
* Protected routes
* React Router
* Axios
* Form handling with Formik
* Form validation with Yup
* Persisting application state
* Handling loading and error states
* Structuring a larger React application
* Separating UI, state, and API logic

## 🧩 Application Structure

```text
App
├── Authentication
│   ├── Register
│   └── Login
│
├── Private Area
│   └── Contacts
│       ├── Contact Form
│       ├── Search Box
│       └── Contact List
│
└── Redux Store
    ├── Auth Slice
    └── Contacts Slice
```

## 📱 Responsive Design

The application is adapted for:

* 📱 Mobile
* 📱 Tablet
* 💻 Desktop

## 🚀 Getting Started

To run the project locally:

```bash
git clone https://github.com/AleksandraCherevko/goit-react-hw-08.git
cd goit-react-hw-08
npm install
npm start
```

The application will be available at:

```text
http://localhost:3000
```

## 📚 Project Type

**Educational / Training Project**

This project was created as part of my React learning path to practice authentication, authorization, asynchronous API operations, Redux Toolkit, routing, and scalable application architecture.

