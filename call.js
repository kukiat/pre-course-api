const request = require('request')

request.post("http://klogic.kmutnb.ac.th:8080/kris/tess/dataQuerySelector.jsp?query=studentTab",
  {form: {
    "currCode": "54040644",
    "facCode": "04",
    "stuGroup": "A",
    "stuRound": "R",
    "stuType": "D",
    "stuYear": "4",
    "timePrecision": "4"}
  },
  (err, res, body) => {
    console.log(body)
  }
)