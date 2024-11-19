from flask import Flask, render_template, request, redirect, url_for, jsonify
from pymongo import MongoClient
from Model_.Test import predict_from_text

app = Flask(__name__, static_folder='static')

# Django's connection and data retrieval here
# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['user_logins']  # Replace 'user_logins' with your desired database name
collection = db['users']  # Collection to store user information
interaction_collection = db['user_interactions']


@app.route('/')
# Route for the login and signup page
@app.route('/', methods=['GET', 'POST'])
def login_signup():
    global user_email
    if request.method == 'POST':
        # Handle the form submission for login and signup
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']

        # Validate password (e.g., minimum length)
        if len(password) < 6:
            error_message = "Password must be at least 6 characters long."
            return render_template('login.html', error=error_message)

        # Save the user information in MongoDB
        user_data = {
            'name': name,
            'email': email,
            'password': password
        }
        collection.insert_one(user_data)
        # Redirect to the login page
        return redirect(url_for('login_signup'))

    return render_template('login.html')


# Route for login functionality
@app.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        # Retrieve the user information from MongoDB
        user = collection.find_one({'email': email, 'password': password})

        if user:
            if user['password'] == password:
                user_email = email  # Set user_email to the current user's email
                print("Logged in user email:", user_email)
                return render_template("HomePage.html")
            else:
                error_message = "Invalid credentials. Please try again."
                return render_template('login.html', error=error_message)
        else:
            error_message = "User not found. Please sign up."
            return render_template('login.html', error=error_message)

    return redirect(url_for('login_signup'))

@app.route('/get_response', methods=['POST'])
def get_response():
    global user_email
    data = request.json
    user_input = data['message']

    # Get the predicted response using the function from the imported module
    predicted_response = predict_from_text(user_input)

    # Save the interaction in the user interactions collection
    # interaction_data = {
    #     'email': user_email,
    #     'question': user_input,
    #     'predicted_response': predicted_response
    # }
    # interaction_collection.insert_one(interaction_data)

    # Return the predicted response as JSON
    return jsonify({'response': predicted_response})

if __name__ == '__main__':
    app.run(debug=True)
