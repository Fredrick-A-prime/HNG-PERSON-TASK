const person = require('../models/PersonModel');


/*const createPerson = async (req, res) => {
    try {
        const newPerson = await person.create(req.body);
        res.status(201).json(newPerson);

    } catch (err) {
        res.status(500).json({ error: 'failed to create person', message: err.message });
    };
};*/
const createPerson = async (req, res) => {
    try {
        const { Name } = req.body;

        if (!Name) {
            return res.status(400).json({ error: 'Name is required' });
        }

        const newPerson = await person.create({ Name });
        res.status(201).json(newPerson);

    } catch (err) {
        res.status(500).json({ error: 'Failed to create person', message: err.message });
    }
};

const getAperson = async (req, res) => {
    try {
        const { Name } = req.query;
        const aPerson = await person.find({Name});
        if (!aPerson || aPerson.length === 0) {
            return res.status(404).json({ error: 'No matching data found' });
        }
        res.status(200).json(aPerson);
    } catch (err) {
        res.status(500).json({ error: 'An error occured' });
    };
};
const updatePerson = async (req, res) => {
    try {
        const details = req.body;
        if (!details || Object.keys(details).length === 0) {
            return res.status(400).json({ error: 'Details are missing in the request body' });
        }

        const { query } = req.query;
        if (!query || Object.keys(query).length === 0) {
            return res.status(400).json({ error: 'Query parameter is required' });
        }

        const updatePerson = await person.findOneAndUpdate(query, details, { new: true });
        if (!updatePerson) throw Error('Can not be updated');
        res.status(200).json(updatePerson);
    } catch (err) {
        res.status(500).json({ error: 'Can not be updated' });
    }
};

const deletePerson = async (req, res) => {
    try {
        const query = req.query; 
        if (!query || Object.keys(query).length === 0) {
            return res.status(400).json({ error: 'Query parameter is required' });
        }

        const deletePerson = await person.findOneAndDelete(query, {});
        if (!deletePerson) throw Error('Person not found');
        res.status(200).json(deletePerson);
    } catch (err) {
        res.status(500).json({ error: 'Can not be deleted' });
    }
};

module.exports = {
    createPerson,
    getAperson,
    updatePerson,
    deletePerson
}