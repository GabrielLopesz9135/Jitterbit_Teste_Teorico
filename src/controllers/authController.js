const jwt = require("jsonwebtoken");

const USER_EMAIL = "admin@admin.com";
const USER_PASSWORD = "123456";
const SECRET = process.env.JWT_SECRET || "secret_default";

module.exports = {
  login: async (req, res) => {
    const { email, senha } = req.body;

    if (email !== USER_EMAIL || senha !== USER_PASSWORD) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    const token = jwt.sign(
      {
        email,
        role: "admin",
      },
      SECRET,
      { expiresIn: "1h" }
    );

    return res.json({ token });
  }
};
