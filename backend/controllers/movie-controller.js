export const addMovie = async (req, res, next) => {
    const extractedToken = req.headers.authorization;
    if(!extractedToken && extractedToken.trim() == ""){
        return res.status(404).json({message: "Token Not Found!"});
    }
    console.log(extractedToken);
};