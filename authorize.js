const authorize = (req,res,next) => { 
  const {user} = req.query;
  if (user) {
    req.user = {name: user, id: 4}
    next();
  } else { 
    res.status(401).json({error: 'Unauthorized'});
  }
};

module.exports = authorize;