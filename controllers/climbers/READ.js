import Climber from '../../models/Climber.js'

async function getClimbers(req,res){
    let queries = {}
    let pagination = {page:1 , limit:5}
    let next=false
    let prev=false
    if (req.query.page) {pagination.page = req.query.page}
    if (req.query.quantity) {pagination.limit = req.query.quantity}
    /* const { email } = req.query
    if (email) {
        queries.email = email
    } */
    try {
        const allClimbers = await Climber.find(queries)
            .skip(pagination.page > 0 ? (pagination.page-1) * pagination.limit : 0)
            .limit(pagination.limit > 0 ? pagination.limit : 0)
        const total = ( await Climber.find({}) ).length
        let maxPages = Math.trunc( total / pagination.limit) + 1
        if ( maxPages > pagination.page ) { next = true }
        if ( pagination.page > 1 ) { prev = true }
        return res.status(200).json({
            success: true,
            response: allClimbers,
            message: "Climbers registered",
            pages: {
                maxPages,
                prev,
                next
            }
        })
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            response: null,
            message: error.message
        })
    }
}

async function getClimber(req,res,next){
    const { id } = req.query
    try {
        const climber = await Climber.findById(id).select("-password -verify_code -__v")
        return res.status(200).json({
            success: true,
            response: climber,
            message: "Here's the climber logged in"
        })
        
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            response: null,
            message: error.message
        })
    }
}

export { getClimbers, getClimber }