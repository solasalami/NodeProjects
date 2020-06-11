const Person = require('../model/person');



module.exports =
    resolvers = {
        hello: () => 'Hello world!',
        AddNumbers: function({ dataInput }, res) {
            console.log("I am here");
            return dataInput.a + dataInput.b;
        },
        createRecord: ({ recordInput, res }) => {

            person = new Person(recordInput._id, recordInput.name, recordInput.email, recordInput.password, recordInput.status);
            console.log("Person ", person);
            console.log("Person Name" + person.email);

            return person;

        }
    };