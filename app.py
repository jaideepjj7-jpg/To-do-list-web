from flask import Flask ,request ,render_template
app=Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")
    
@app.route("/timer")
def timer():
    return render_template("timer.html")
    
@app.route("/list")
def list():
    return render_template("list.html")

if __name__=="__main__":
    app.run(debug=True)