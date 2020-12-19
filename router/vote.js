const router = require("express").Router();
const models = require("../models")

router.post('/', async (req, res) => {

  try {
    const values = {
      entry_no: req.body.entry_no,
      ip: req.ip,
      created_at: Date.now(),
      updated_at: Date.now()
    }
    await models.votes.create(values)
    res.status(204);
    res.end();
  }
  catch (e) {
    console.log(e)
    res.status(500);
    res.json({
      err: "Internal Server Error."
    })
  }
})

module.exports = router;