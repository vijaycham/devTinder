learned advanced learning methods

app.get("ab+c", (req, res) => {
  res.send({ firstname: "Vijay", lastName: "Sivakadatcham" });
});
app.get("ab*c", (req, res) => {
  res.send({ firstname: "Vijay", lastName: "Sivakadatcham" });
});

app.get("a(bc)+d", (req, res) => {
  res.send({ firstname: "Vijay", lastName: "Sivakadatcham" });
});

app.get(/a/, (req, res) => {
  res.send({ firstname: "Vijay", lastName: "Sivakadatcham" });
});

app.get(/.*user$/, (req, res) => {
  res.send({ firstname: "Vijay", lastName: "Sivakadatcham" });
});

Regex

req.query
![alt text](image.png)

![alt text](image-1.png)

![alt text](image-2.png)

![alt text](image-3.png)