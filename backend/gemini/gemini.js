const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const askText = async (question) => {
  // For text-only input
  console.log("question for Gemini:", question);
  const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro-001" });

  const prompt = question;

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  console.log("Gemini response:", text);
  return text;
};

module.exports = { askText };
