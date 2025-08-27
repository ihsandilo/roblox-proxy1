export default async function handler(req, res) {
  const { universeId } = req.query;

  if (!universeId) {
    return res.status(400).json({ error: "Missing universeId" });
  }

  try {
    const response = await fetch(`https://games.roblox.com/v1/games/votes?universeIds=${universeId}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}