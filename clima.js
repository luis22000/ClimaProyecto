const axios = require('axios')
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});
app.get('/:id/:llave', function (req, res) {
  var llave = req.params.llave;
  var id = req.params.id;
  
  const ObtenerClima = async () => {
  const VarClima = Clima(llave,id,res)
    .then(response => {
      if (response.data) {
		res.send(response.data)
      }
    })
    .catch(error => {
      res.send(error)
    })
	
}
  ObtenerClima()
});

const Clima = (llave,id,res) => {
  try {
    return axios.get('http://api.openweathermap.org/data/2.5/forecast?id='+id+'&APPID='+llave)
  } catch (error) {
    res.send(error)
  }
}



