import Category from '../../models/Category.js'

async function getCategories(req,res,next){
    try {
        const allCoaches = await Category.find()
        return res.status(200).json({
            success: true,
            response: allCoaches,
            message: "Here are all the categories"
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

export { getCategories }