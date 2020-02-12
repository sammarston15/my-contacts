const bcrypt = require('bcrypt');

module.exports = {
    createLogin: async (req, res) => {
        try {
            const db = req.app.get('db');
            const { username, password } = req.body;

            if (!username || !password) {
                res.status(401).send('Please enter a valid username and password.');
            }

            const user = await db.users.find({ username })
            if (!user) {
                res.status(401).send('Please enter a valid username or password or you may need to signup');
            }

            const authenticated = await bcrypt.compare(password, user.password);
            if (!authenticated) {
                res.status(401).send('Please enter a valid username and password')
            }

            req.session.user = user;
            
            res.send(user);

        } catch (error) {
            
        }
    }

}