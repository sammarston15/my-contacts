const bcrypt = require("bcrypt");

const createLogin = async (req, res) => {
  try {
    const db = req.app.get("db");
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(401)
        .send("Please enter a valid username and password.");
    }

    const user = await db.users.find({ username });
    if (!user) {
      return res
        .status(401)
        .send(
          "Please enter a valid username or password or you may need to signup"
        );
    }

    const authenticated = await bcrypt.compare(password, user.password);
    if (!authenticated) {
      return res.status(401).send("Please enter a valid username and password");
    }

    req.session.user = user;

    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createSignup = async (req, res, next) => {
  try {
    const { firstName, lastName, username, password } = req.body;
    const db = req.app.get("db");

    const hash = await bcrypt.hash(password, 10);

    const newUser = await db.employees.insert({
      first_name: firstName,
      last_name: lastName,
      username: username,
      password: hash,
    });

    delete newUser.password;
    res.send(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const getContacts = async (req, res) => {
  console.log({ req, app: req.app });
  try {
    const db = await req.app.get("db");

    // get all contacts
    const contacts = await db.query(`select * from contacts`);
    res.status(200).send(
      contacts.map((contact) => ({
        ...contact,
        firstName: contact.first_name,
        lastName: contact.last_name,
      }))
    );
  } catch (error) {
    console.log(error);
    res.status(500).send(`async catch: ${error}`);
  }
};

const newContact = async (req, res) => {
  try {
    const db = await req.app.get('db');
    const { firstName, lastName, phone, email, address1, address2, city, state, zip } = req.body;

    const newContact = {
      first_name: firstName,
      last_name: lastName,
      phone: phone,
      email: email,
      address1: address1,
      address2: address2,
      city: city,
      state: state,
      zip: zip,
      created_at: new Date(),
      updated_at: new Date()
    }
    console.log('newContact', newContact)
    
    await db.contacts.insert(newContact)
    
    res.status(200).send({
      firstName,
      lastName,
      phone,
      email,
      address1,
      address2,
      city,
      state,
      zip
    })
  } catch (error) {
    console.log('something went wrong: ', error)
    res.status(500).send(error)
  }

}
// const newContact = async (req, res) => {
//   try {
//     const db = await req.app.get('db');
//     const { firstName, lastName, phone, email, address1, address2, city, state, zip } = req.body;

//     await db.query(`
//     insert into contacts(first_name, last_name, phone, email, address1, address2, city, state, zip)
//     values (${firstName}, ${lastName}, ${phone}, ${email}, ${address1}, ${address2}, ${city}, ${state}, ${zip})
//     `)

//     res.status(200).send('Successfully saved new contact!')
//   } catch (error) {
//     console.log('something went wrong: ', error)
//     res.status(500).send(error)
//   }

// }

module.exports = {
  createLogin,
  createSignup,
  getContacts,
  newContact
};
