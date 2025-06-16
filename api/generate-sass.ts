const exampleMessages = {
  mild: ["That's... interesting.", "Sure, if you say so.", "Oh, okay then."],
  medium: ["Really? That's your take?", "Bold choice there.", "Well, that happened."],
  spicy: ["Oh honey, no.", "The audacity is real.", "I cannot even begin to explain how wrong this is."]
};
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  const { sassLevel = 'medium' } = req.body;
  const messages = exampleMessages[sassLevel] || exampleMessages.medium;
  
  res.json({
    messages: messages.map(text => ({
      text,
      sassLevel,
      characterCount: text.length
    }))
  });
}
