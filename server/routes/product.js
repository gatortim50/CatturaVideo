//

exports.findProduct = function(req, res) {
  var rs = 1;
  res.send({product: rs});
};

exports.findById = function(req, res) {
  res.send({id:req.params.id, name: "The Test Name", description: "The Test Description"});
};

exports.findAll = function(req, res) {
  res.send([
    {
      "id": "5207A",
      "name": "Ford",
      "color": "Red",
      "location": "USA"
    },
    {
      "id": "5206A",
      "name": "Toyota",
      "color": "Green",
      "location": "Panama"
    },
    {
      "id": "5233O",
      "name": "Honda",
      "color": "Orange",
      "location": "Spain"
    },
    {
      "id": "2233M",
      "name": "Chevrolet",
      "color": "Red",
      "location": "Spain"
    },
    {
      "id": "3206G",
      "name": "Honda",
      "color": "Green",
      "location": "Panama"
    },
    {
      "id": "1206S",
      "name": "Toyota",
      "color": "Red",
      "location": "Spain"
    },
    {
      "id": "3216G",
      "name": "Ford",
      "color": "Red",
      "location": "Jamaica"
    }
  ]);
};
