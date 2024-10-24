import Climber from "../../models/Climber.js";

export default async (req, res, next) => {
    // El código de verificación está en la URL
    
    const verifyCode = req.params.verify_code;
    console.log("aca: ", verifyCode)
    try {
        // Buscamos el usuario en la base de datos y actualizamos verified = true
        const user = await Climber.findOneAndUpdate(
            { verify_code: verifyCode, verified: false },
            { verified: true }
        );
        //const user = await User.findOne({verify_code: verifyCode})

        console.log("user ver: ", user)
        
        // Si no existe, o ya está verificado, devolvemos error
        if (!user) {
            return res.status(400).json({
                message: "Código de verificación inválido o cuenta ya verificada.",
            });
        }

        return res.status(200).json({
            message: "Cuenta verificada exitosamente.",
        });
    } catch (error) {
        console.log(error)
        next(error);
    }
};