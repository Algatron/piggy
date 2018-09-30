module.exports = function (expressApp) {
  const AuthService = require('../auth.service');

    return {
        initRoutes() {

            console.info('Initializing route [/register]');

            expressApp.post('/register', async (req, res) => {

                const registrar = req.body;

                // Validate request data
                if (!registrar) {
                    return res.status(400).send('Invalid register request. Missing required field(s)');
                }
                if (!registrar.email) {
                    return res.status(400).send('Invalid register request. Missing required field: email');
                }
                if (!registrar.password) {
                    return res.status(400).send('Invalid register request. Missing required field: password');
                }

                // Validate user doesn't not already exist
                const exists = await AuthService.userExists(registrar);
                if (exists) {
                    return res.status(409).send('An account is already registered with this email address');
                }

                return AuthService.registerNewUser(registrar)
                    .then(newUser => {
                        return res.status(201).send(newUser);
                    })
                    .catch(err => {
                        console.error(`register.route - Error creating user: ${err}`);
                        return res.status(500).send('Unknown error creating new user.');
                    });
            });
        }
    };
};