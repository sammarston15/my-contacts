const bcrypt = require('bcrypt');

module.exports = {
    createLogin: async (req, res) => {
        try {
            const db = req.app.get('db');
            const { username, password } = req.body;
        } catch (error) {
            
        }
    }

}