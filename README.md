So for this project, I went with a laptop-themed app. I started by creating my resource type and added some laptop data using Postman with a simple POST method. Once I had that data set up, I moved on to building the frontend.

For the frontend, I chose React because it's what I'm comfortable with, and paired it with Vite for faster setup and performance. I cleaned up all the default boilerplate from Vite so I could start with a fresh base.

Project Setup
I created a proper folder structure to keep things organized. I added:

a components/ folder for reusable components

a pages/ folder for different routes like the laptop list and detail views

a routes/ folder to handle all routing

I also built a DefaultLayout component that uses React Router’s <Outlet />, which helps me keep things like the header visible across all pages.

Header & Navigation
In the header, I placed the app logo on the left. On the right, I added links to different pages like Wishlist and Comparison, making it easy to navigate. I used Link from react-router-dom to switch between pages without a full refresh.

Pages & Features
First, I created the Laptop Page, where I show a list of all laptops. Clicking on any laptop takes you to a Detail Page, where I display all its info like processor, RAM, storage, price, etc.

Then, I built a Wishlist feature. You can add any laptop to the wishlist from anywhere and remove it too. It updates globally.

Finally, I worked on the Comparison feature. You can select two laptops from dropdown menus and compare them side-by-side. I made sure you can’t select the same laptop in both dropdowns — it shows an alert if you try.
