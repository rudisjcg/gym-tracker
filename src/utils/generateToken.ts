import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userEmail: string, res:any) => {
    const secret = process.env.JWT_SECRET || ""; // Set a default value for JWT_SECRET if it's undefined
    const token = jwt.sign({ userEmail }, secret, {
        expiresIn: "3d",
    });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // MS
        httpOnly: true, // prevent XSS attacks cross-site scripting attacks
        sameSite: "strict", // CSRF attacks cross-site request forgery attacks
        secure: process.env.NODE_ENV !== "development",
    });
};

export default generateTokenAndSetCookie;
