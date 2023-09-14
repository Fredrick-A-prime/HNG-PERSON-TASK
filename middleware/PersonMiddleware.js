const validateNameParam = (req, res, next) => {
    const name = req.params.name;
    
    const regex = /^[A-Za-z\s]+$/;
  
    if (!regex.test(name)) {
      return res.status(400).json({ error: 'Invalid name format. Name should contain only letters and spaces.' });
    }
    next();
};

module.exports = validateNameParam;