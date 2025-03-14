# Product Listing Page (PLP)

This repository contains the code for a **Product Listing Page (PLP)** built using **React.js**. The page fetches product data from the [FakeStoreAPI](https://fakestoreapi.com) and displays it dynamically. The page includes:
- **Header**
- **Footer**
- **Aside Filter** for product categories
- **Recommendations Section**

The layout is fully **responsive**, ensuring compatibility with both **mobile** and **tablet** views.

## Key Features

- **Product Fetching**: Dynamically fetches product data from the FakeStoreAPI.
- **Responsive Layout**: The page layout adapts to mobile, tablet, and desktop views.
- **Filter Functionality**: Allows users to filter products by category using an aside filter.
- **Recommendation Section**: Displays a set of recommended products.
- **Header & Footer**: Simple header and footer sections for navigation and information.
- **Responsive Design**: The page is designed using media queries to ensure it’s optimized for different screen sizes.

## Tech Stack

- **Frontend Framework**: React.js
- **API**: FakeStoreAPI for fetching product data
- **CSS**: Custom CSS with media queries for responsiveness

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>



### Notes:
1. **API Integration**: The product list is populated by calling `https://fakestoreapi.com/products` via a `fetch()` request. You can adapt the API URL or use a mock API for testing.
2. **Responsive Design**: The project is mobile-first with media queries for responsiveness. Adjustments for tablet and desktop are added.
3. **Deployment**: Deploy your project using platforms like Vercel or Netlify and provide a live demo URL in the `README.md`.
