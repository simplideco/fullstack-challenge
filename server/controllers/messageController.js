const { response } = require('express');
const faker = require('faker');
const random = require('random');

const generate = () => new Promise((resolve, reject) => {
  const nextInMS = random.int(2000, 4000);
  let data;


  if (nextInMS > 3850 && nextInMS < 3900) {
    return reject({ ok: false, status: 404, message: "404 Server could not find the requested website" });
  } else if (nextInMS > 3900 && nextInMS < 3950) {
    return reject({ ok: false, status: 500, message: "500 Generic error response" });
  } else if (nextInMS > 3950) {
    return reject({ ok: false, status: 403, message: "403 Forbidden client error" });
  } else {

    setTimeout(() => {
      const message = faker.lorem.sentence();
      const priority = random.int(1, 3);
      data = {
        message,
        priority,
      }

      return resolve({ok: true, status: 200, message: data });
    }, nextInMS);

  }

});

const getMessage = async (req, res = response) => {

  try {
    const message = await generate();
    return res.status(message.status).json(message);
  } catch (error) {
    console.log(error);
    return res.status(error.status).json(error);
  }

};

module.exports = { getMessage };