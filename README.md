# typing_practice

Typing Master is a web application designed to help users improve their typing speed and accuracy. Whether you're a beginner looking to learn touch typing or an experienced typist aiming to boost your words-per-minute (WPM) rate.

## Main Features:

- User can see that the time interval words must be typed as displayed in the app window.
- User can see the number of successful attempts and the number of total attempts in a score box.
- User can click a 'Start Practice' button to start the practice session.
- User can see the prompt word displayed in a text box.
- User can begin typing the word in a text input box.
- User can see the letters that have been typed flash if an incorrect letter is entered and the text input box will be cleared
- User can see the number of total attempts incremented in the score box.
- User can see a congratulations message if the word is correctly typed.
- User can see the number of successful attempts incremented in the score box if the word was correctly typed.
- User can click a 'Stop Practice' button to stop the practice session.
- User can hear a unique audible tone signaling when a new word is
  displayed, a word is correctly entered, or an incorrect letter is typed in
  the word.

## Partially done feature:

- User can log in to the app

## Installation

- Make sure you have Python installed. If not, you can download and install it from Python's official website.
- Clone this repository to your local machine
  ```bash
   git clone https://github.com/vssivabharathi/typing_pratice.git
  ```
- Navigate into project directory.
  ```bash
   cd Django/typing_pratice
  ```
- Create a Virtualenv .
  ```bash
   python -m venv .env
  ```
- Activate the Virtualenv.
  ```bash
   source .env/bin/activate
  ```
- Install Necessary packages.
  ```bash
   pip install -r 'requirements.txt'
  ```
- Create the necessary migration for the database
  ```bash
   python manage.py makemigrations
   python manage.py migrate
  ```

## Usage

- Start the Django development server.
  ```bash
  python manage.py runserver
  ```
- Open a web browser and go to http://127.0.0.1:8000/ to view the application.

## Contributing

If you want to contribute to this project, please follow these steps:

- Fork this repository.
- Create a new branch

```bash
   git checkout -b feature_branch
```

- Make your changes and commit them.

```bash
   git commit -m "Your Message here"
```

- Push to the remote branch>

```bash
   git  push origin feature_branch
```
#DEMO VIDEO
[website.webp](https://github.com/vssivabharathi/typing_pratice/tree/main/Django/typing_pratice/typingapp/static/website.webm)
