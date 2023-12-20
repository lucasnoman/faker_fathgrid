import sqlite3

from faker import Faker
from flask import Flask, redirect, render_template, request, url_for
from flask_cors import CORS

app = Flask(__name__, static_url_path="/static", static_folder="static")
CORS(app)

con = sqlite3.connect("database.db", check_same_thread=False)
cur = con.cursor()

fake = Faker("pt_BR")

try:
    cur.execute("create table user(name, email, phone, address)")
except:
    pass


def insertValues(name, email, phone, address):
    cur.execute(
        "insert into user(name, email, phone, address) values(?,?,?,?)",
        (name, email, phone, address),
    )
    con.commit()


count = 0
if count == 0:
    cur.execute("delete from user")
    count += 1

for value in range(3):
    insertValues(fake.name(), fake.email(), fake.phone_number(), fake.address())


results = cur.execute("select * from user").fetchall()
user_data = [
    {"name": value[0], "email": value[1], "phone": value[2], "address": value[3]}
    for value in results
]


@app.route("/", methods=["GET", "POST"])
def hello_world():
    if request.method == "GET":
        return render_template("with-json.html")
        # return render_template("index.html", user_data=user_data)
    if request.method == "POST":
        data = request.get_json()
        insertValues(
            data["name"],
            data["email"],
            data["phone"],
            data["address"],
        )
        return redirect(url_for("hello_world"))


@app.route("/data")
def index():
    return user_data


if __name__ == "__main__":
    app.run(debug=True)
