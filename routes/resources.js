const express = require('express');
const router = express.Router();
const Resource = require('../models/resource');
const generateTerraformScript = require('../utilities/terraformScriptGeneration');

router.post('/', async (req, res) => {
  const newResource = new Resource({
    name: req.body.name,
    type: req.body.type
  });
  await newResource.save();

  generateTerraformScript(newResource);

  res.send('Terraform script generated');
});

module.exports = router;