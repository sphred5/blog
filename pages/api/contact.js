import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "invalid form entry" });
      return;
    }
    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(process.env.DB_URL);

    } catch (error) {
      res.status(500).json({
        message: "error connecting to database"
      })
      return;
    }

    const db = client.db("blog");

    try {
      const result = await db.collection("contact-form").insertOne(newMessage);
      res.status(201).json({ message: "Message Sent!", message: newMessage });
      newMessage.id = result.insertedId;
      client.close();
      return result;

    } catch (error) {
      client.close();
      res.status(500).json({ message: "error inserting data" })
      return;
    }
  }
}

export default handler;
