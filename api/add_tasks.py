import MySQLdb
import datetime

connection = MySQLdb.connect(
    host="gcp.connect.psdb.cloud",
    user="1m1jyk2htcpz908ip31u",
    password="pscale_pw_jmGigP1OBgXNFuFo26TXCy6LcNGWdyz0sJt2SVdvWHf",
    database="todo-db",
    autocommit=True,
    ssl={
        "rejectUnauthorized": True,
    },
)


def add_task(user_id, task_content):
    cursor = connection.cursor()
    query = f"""
        INSERT INTO tasks (user_id, task_content, is_finished, date_added)
        VALUES ("{user_id}", "{task_content}", "0", "{str(datetime.datetime.now())}")
    """
    print(query)
    cursor.execute(query)
    