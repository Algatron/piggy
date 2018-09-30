
module.exports = (function(glob) {

    function getContainer() {
        if (!glob._sreg) {
            glob._sreg = {};
        }
        return glob._sreg;
    }

    console.info('Initializing Service Registry.')

    return class ServiceRegistry {

        static register(name, service) {
            if (!name) {
                throw `IOC.register() - error with arg1, invalid name [${name}]`;
            }
            if (!service) {
                throw `IOC.register() - error with arg2, no service provided`;
            }
            console.info(`ServiceRegistry - registering value for ${name}`);
            getContainer()[name] = service;
        };

        static get(name) {
            if (!name) {
                throw `IOC.get() - error with arg1, invalid name [${name}]`;
            }
            if (!getContainer()[name]) {
                console.warn(`IOC.get() - [${name}] is registered, but no servive found`);
            }
            return getContainer()[name];
        }

        

    ;}
})(global);
