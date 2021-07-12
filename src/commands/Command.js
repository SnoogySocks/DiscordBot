/**
 * @abstract
 */
module.exports = class Commmand {

    constructor (name, description) {

        this.name = name;
        this.description = description;
        
    }

    /**
     * @abstract
     * @param {String} name 
     * @param {String} description 
     */
    execute (name, description, Discord) {
    }
    
}