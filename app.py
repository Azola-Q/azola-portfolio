from flask import Flask, render_template, request, flash, redirect, url_for
from flask_mail import Mail, Message
import os

app = Flask(__name__)
app.secret_key = 'aazloquaqka-2520'  # Replace with a secure key for production

# --- Flask-Mail Configuration ---
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'azolaqakaqu@gmail.com'      # <-- your Gmail address
app.config['MAIL_PASSWORD'] = 'xnlnwaqceukdpoon'        # <-- Gmail App Password

mail = Mail(app)

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

        try:
            msg = Message(
                subject=f"New message from {name}",
                sender=app.config['MAIL_USERNAME'],
                recipients=['azolaqakaqu@gmail.com'],  # where you’ll receive messages
                body=f"From: {name} <{email}>\n\nMessage:\n{message}"
            )
            mail.send(msg)

            flash("Your message has been sent successfully!", "success")

        except Exception as e:
            flash(f"There was an error sending your message: {e}", "danger")

        return redirect(url_for('contact'))

    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True, port=5001)
