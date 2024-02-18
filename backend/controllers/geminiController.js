const { askText } = require("../gemini/gemini");

const askGemini = async (req, res, next) => {
  try {
    let aiResponse = await askText("Tell me a short joke");
    return res.status(200).json({ aiResponse });
  } catch (err) {
    next(err);
  }
};

module.exports = { askGemini };
