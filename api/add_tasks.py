import MySQLdb
import datetime
from dotenv import load_dotenv
load_dotenv("api\dotenv.env")
import os
import bcrypt

connection = MySQLdb.connect(
    host=os.getenv("DB_HOST"),
    user=os.getenv("DB_USERNAME"),
    passwd= os.getenv("DB_PASSWORD"),
    db=os.getenv("DB_NAME"),
    autocommit=True,
    ssl={
        "rejectUnauthorized": True,
    },
)


def add_task(user_id, task_content):
    cursor = connection.cursor()
    query = f"""
        INSERT INTO tasks (user_id, task_content, is_finished, date_added)
        VALUES ("{user_id}", "{task_content}", "0", "{str(datetime.datetime.now())}");
    """
    cursor.execute(query)
    

def check_login(username, password):
    cursor = connection.cursor()
    query = f"""
        SELECT user_password_hash, user_password_salt
        FROM users WHERE username = "{username}";
    """
    print(query)
    result = cursor.execute(query)
    print(result)


def new_user(username, email, password):
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(password.encode("utf-8"), salt)
    print(hashed)
    cursor = connection.cursor()
    query = f"""
        INSERT INTO users (username, user_email, user_password_hash, user_password_salt)
        VALUES ("{username}", "{email}", "{hashed.decode("utf-8")}", "{salt.decode("utf-8")}");
    """
    print(query)
    result = cursor.execute(query)
    print(bcrypt.hashpw(password.encode("utf-8"), salt.decode("utf-8").encode("utf-8")).decode("utf-8"))
    return True