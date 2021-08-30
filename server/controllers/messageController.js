const { response } = require('express');
const faker = require('faker');
const random = require('random');

const generate = () => new Promise((resolve, reject) => {
  const nextInMS = random.int(500, 800);
  let data;


  if (nextInMS > 700 && nextInMS < 735) {
    return reject({ ok: false, status: 404, message: "Server could not find the requested website" });
  } else if (nextInMS > 735 && nextInMS < 770) {
    return reject({ ok: false, status: 500, message: "Generic error response" });
  } else if (nextInMS > 770) {
    return reject({ ok: false, status: 403, message: "Forbidden client error" });
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
  }

};

module.exports = { getMessage };