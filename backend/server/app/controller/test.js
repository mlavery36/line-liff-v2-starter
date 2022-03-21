


module.exports = (req, res, next) => {
    try {
        const name = req.query.name || '???'
        return res.json({test: `hello ${name}`})
    }catch(e){
        next(e)
    }
}