const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const generateAccessToken = (user) => {
  return jwt.sign({ email: user.email }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: "10s",
  });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ email: user.email }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log("Login Request Body:", req.body);

      const user = await User.findOne({ email });
      if (!user) {
        console.log("User not found:", email);
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log("Incorrect password for user:", email);
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);

      user.refreshToken = refreshToken;
      user.accessToken = accessToken;

      await user.save();
      console.log("User updated successfully:", user);

      // ✅ Only one response!
      return res.status(200).json({
        accessToken,
        refreshToken,
        user: {
          id: user._id,
          name: user.name || user.firstName || "", // adapt to your schema
          email: user.email,
        },
      });
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },

  logout: async (req, res) => {
    try {
      const { email } = req.body;

      if (!email) {
        return res
          .status(400)
          .json({ message: "Email is required for logout" });
      }

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      user.refreshToken = "";
      user.accessToken = "";
      await user.save();

      console.log("User logged out successfully:", email);

      return res.status(200).json({ message: "Logout successful" });
    } catch (error) {
      console.error("Logout error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  },
  generateAccessToken,
  generateRefreshToken,
};
