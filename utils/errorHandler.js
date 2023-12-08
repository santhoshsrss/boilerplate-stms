module.exports = (res, error) => {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  };
  