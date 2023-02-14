"use strict";

import { dbService } from "./db.service.js";

const KEY = "contacts";

export const contactService = {
  query,
  getById,
  remove,
  save,
  getEmptyContact,
};

async function query() {
  var contacts = await dbService.query(KEY)

  if (!contacts || !contacts.length) {
    contacts = _createDefaultContacts()
    await dbService.insert(KEY, contacts)
  }
  return contacts;
}

async function getById(id) {
  return await dbService.get(KEY, id)
}

async function remove(id) {
  console.log('id', id)
  return await dbService.remove(KEY, id)
}

async function save(contact) {
  if (contact._id) return await dbService.put(KEY, contact)
  else return await dbService.post(KEY, contact)
}

function getEmptyContact() {
  return {
    _id: "",
    name: "",
    email: "",
    phone: "",
    imgUrl: `https://randomuser.me/api/portraits/men/${getRandomInt()}.jpg`,
  }
}

  function _createDefaultContacts() {
    return [
      {
        _id: "bd4fe1f5-11bc-4bc1-a692-50a225166e0b",
        name: "Eloisa Giacopazzi",
        email: "egiacopazzi0@nytimes.com",
        phone: "(298) 2143397",
        imgUrl: `https://randomuser.me/api/portraits/men/${getRandomInt()}.jpg`,
      },
      {
        _id: "50c8ffe0-1864-4f30-95c1-2066a3585fa3",
        name: "Bernita Cranage",
        email: "bcranage1@salon.com",
        phone: "(661) 8874134",
        imgUrl: `https://randomuser.me/api/portraits/men/${getRandomInt()}.jpg`,
      },
      {
        _id: "8eaade3b-c066-4431-9f06-401bf7c7044c",
        name: "Morie Jovicevic",
        email: "mjovicevic2@reuters.com",
        phone: "(490) 9132234",
        imgUrl: `https://randomuser.me/api/portraits/men/${getRandomInt()}.jpg`,
      },
      {
        _id: "a0600c28-1fd3-43f4-b528-156c95d65911",
        name: "Torry Bescoby",
        email: "tbescoby3@google.ca",
        phone: "(828) 5656686",
        imgUrl: `https://randomuser.me/api/portraits/men/${getRandomInt()}.jpg`,
      },
      {
        _id: "eb316bd2-cff0-48f2-a071-7f4b9a747bf8",
        name: "Letty Rentelll",
        email: "lrentelll4@histats.com",
        phone: "(674) 2008746",
        imgUrl: `https://randomuser.me/api/portraits/men/${getRandomInt()}.jpg`,
      },
      {
        _id: "ba9609c8-c5c1-4d9c-8138-dca7b2e6fea5",
        name: "Cthrine Brindley",
        email: "cbrindley5@joomla.org",
        phone: "(441) 8662236",
        imgUrl: `https://randomuser.me/api/portraits/men/${getRandomInt()}.jpg`,
      },
      {
        _id: "1ecfea5b-4689-4334-a359-ebdc0c6e3f55",
        name: "Ludvig Aizkovitch",
        email: "laizkovitch6@loc.gov",
        phone: "(624) 1699805",
        imgUrl: `https://randomuser.me/api/portraits/men/${getRandomInt()}.jpg`,
      },
      {
        _id: "c580f7e1-ab41-4fd2-9497-5204d6c8f277",
        name: "Gratiana Chippin",
        email: "gchippin7@wikispaces.com",
        phone: "(360) 2928098",
        imgUrl: `https://randomuser.me/api/portraits/men/${getRandomInt()}.jpg`,
      },
      {
        _id: "846d66ea-62f6-49e2-9457-3ed896dd9e37",
        name: "Paul Ballaam",
        email: "pballaam8@bigcartel.com",
        phone: "(297) 3387910",
        imgUrl: `https://randomuser.me/api/portraits/men/${getRandomInt()}.jpg`,
      },
      {
        _id: "f345f3aa-0e1c-498c-bd1c-8032bf854e0f",
        name: "Brendin Fellis",
        email: "bfellis9@engadget.com",
        phone: "(186) 9911147",
        imgUrl: `https://randomuser.me/api/portraits/men/${getRandomInt()}.jpg`,
      },
      {
        _id: "b039283f-98e2-4e86-a219-99c675f2bed2",
        name: "Becka Davitashvili",
        email: "bdavitashvilia@illinois.edu",
        phone: "(115) 7144578",
        imgUrl: `https://randomuser.me/api/portraits/men/${getRandomInt()}.jpg`,
      },
      {
        _id: "b0717b96-db67-46fc-9d07-a021f78b2774",
        name: "Micki Labeuil",
        email: "mlabeuilb@marketwatch.com",
        phone: "(127) 5756738",
        imgUrl: `https://randomuser.me/api/portraits/men/${getRandomInt()}.jpg`,
      },
      {
        _id: "37d3f546-cb6f-4af4-a102-7e5a2a2b106b",
        name: "Hayes Carberry",
        email: "hcarberryc@eepurl.com",
        phone: "(540) 6159066",
        imgUrl: `https://randomuser.me/api/portraits/men/${getRandomInt()}.jpg`,
      },
      {
        _id: "4eb74430-6625-4b1d-92c7-14bc5b2d5031",
        name: "Doralin Roy",
        email: "droyd@nhs.uk",
        phone: "(677) 4485773",
        imgUrl: `https://randomuser.me/api/portraits/men/${getRandomInt()}.jpg`,
      },
      {
        _id: "9cb3a7a5-6854-41f3-8c01-97deaa3bd662",
        name: "Modesta Lamming",
        email: "mlamminge@hubpages.com",
        phone: "(902) 6974812",
        imgUrl: `https://randomuser.me/api/portraits/men/${getRandomInt()}.jpg`,
      },
      {
        _id: "8d7544f9-5233-49b2-9978-09bce776a837",
        name: "Mohandas Fairbairn",
        email: "mfairbairnf@google.cn",
        phone: "(377) 9761624",
        imgUrl: `https://randomuser.me/api/portraits/men/${getRandomInt()}.jpg`,
      },
      {
        _id: "73ced703-69d4-4fa4-bae6-ae1a00df4c00",
        name: "Valentina Desquesnes",
        email: "vdesquesnesg@biglobe.ne.jp",
        phone: "(302) 9939832",
        imgUrl: `https://randomuser.me/api/portraits/men/${getRandomInt()}.jpg`,
      },
      {
        _id: "1280ce9c-58a6-4d65-aca3-fa7fddb316ba",
        name: "Ulrikaumeko Bachelar",
        email: "ubachelarh@dropbox.com",
        phone: "(804) 1616530",
        imgUrl: `https://randomuser.me/api/portraits/men/${getRandomInt()}.jpg`,
      },
      {
        _id: "a95936a3-5e3c-48a9-b3eb-7a4c7fca9dde",
        name: "Davidson Esome",
        email: "desomei@tripod.com",
        phone: "(473) 1748994",
        imgUrl: `https://randomuser.me/api/portraits/men/${getRandomInt()}.jpg`,
      },
      {
        _id: "61774778-f7d7-4923-a0af-c3af1c59496e",
        name: "Alfy Trevaskiss",
        email: "atrevaskissj@unc.edu",
        phone: "(619) 6533590",
        imgUrl: `https://randomuser.me/api/portraits/men/${getRandomInt()}.jpg`,
      }
    ]
  }

  function getRandomInt(){
    return Math.floor(Math.random() * 99) + 1
  }
