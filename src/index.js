const app = require("express")();
function test(one, two, three) {
  console.info(one, two, three);
}

@test
class Prueba {
  constructor() {}
}

new Prueba();
app.get("/", (req, res) => res.status(200).send({ Hello: "world" }));
app.listen(3000, () => console.log("Server listen on port 3000"));
