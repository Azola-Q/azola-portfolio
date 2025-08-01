from flask import Flask, render_template, request, flash, redirect, url_for
import os

app = Flask(__name__)
app.secret_key = 'your-secret-key-here'  # Replace with a secure key for production

# Path to store contact form submissions
MESSAGES_FILE = os.path.join(os.path.dirname(__file__), 'messages.txt')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form.get('name')
        email = request.form.get('email')
        message = request.form.get('message')
        with open(MESSAGES_FILE, 'a') as f:
            f.write(f"Name: {name}, Email: {email}, Message: {message}\n")
        flash(f'Thanks, {name}! Your message has been received.')
        return redirect(url_for('contact'))
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True, port=5001)