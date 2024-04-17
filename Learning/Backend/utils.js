import jwt from 'jsonwebtoken'

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]

    if(!token){
        return res.sendStatus(401)
    }
    jwt.verify(token,process.env.SECRET,(err,user)=>{
        req.user = user;
        next()
    })
}

export default authenticateToken