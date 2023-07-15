# Book Recommendation System

![Home Screen](https://github.com/code-lover636/BookBuddy/assets/77882744/ebd42c0c-ccb1-4377-ba1b-414c09229bd9)

This repository contains a book recommendation system that utilizes collaborative filtering techniques to provide users with personalized book recommendations. The system has two main features: "Popular Books" and "Recommendations Based on Book Name Input." The system is implemented using Python for backend development, React for frontend development, and FastAPI as the web framework. The interface is designed to be user-friendly and mobile-responsive.

## Features

### 1. Popular Books

The "Popular Books" feature allows users to explore a list of popular books that are rated more. The system analyzes user preferences and book ratings to identify the most popular books among the user community. These popular books are displayed on the website, along with their descriptions, covers, and other relevant information. Users can click on a book to view more details and decide if they want to read it.

### 2. Recommendations Based on Book Name Input

The "Recommendations Based on Book Name Input" feature enables users to receive personalized book recommendations based on their input of a book name. The system utilizes collaborative filtering algorithms and machine learning techniques to analyze the preferences of similar users and generate recommendations that match the user's interests. Users can input the name of a book they enjoyed, and the system will provide a list of recommended books that they might find interesting. Each recommendation is accompanied by relevant information and a link to view more details.

## Technologies Used

The book recommendation system is built using the following technologies:

- Python: The backend logic, collaborative filtering algorithms, and machine learning models are implemented using Python.
- React: The frontend interface is developed using the React JavaScript library, providing an interactive and responsive user experience.
- SCSS: The styling of the website is done using SCSS, a CSS preprocessor that offers a more efficient and maintainable way of writing styles.
- FastAPI: FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints.
- Sci-kit Learn: The Sci-kit Learn library is used for implementing machine learning algorithms and collaborative filtering techniques.
- Machine Learning: Various machine learning algorithms are employed to analyze user preferences and generate personalized book recommendations.

## Usage

To run the book recommendation system locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/your-username/book-recommendation-system.git
   ```

2. Set up the backend:

   - Install the required Python dependencies using pip:

     ```
     pip install -r requirements.txt
     ```

   - Run the backend server:

     ```
     python main.py
     ```

3. Set up the frontend:

   Install packages
     ```
     npm install
     ```

   - Start the frontend server:

     ```
     npm run dev
     ```

4. Access the book recommendation system:

   Visit `http://localhost:3000` in your web browser to access the book recommendation system. You can now explore the popular books or input a book name to receive personalized recommendations.

