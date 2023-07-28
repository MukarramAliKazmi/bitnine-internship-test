import express from 'express'
import pool from '../db.js'
import bcrypt from 'bcrypt'

function generateRandomText(length) {
  const words = [
    'apple', 'banana', 'orange', 'grape', 'kiwi',
    'elephant', 'tiger', 'lion', 'giraffe', 'zebra',
    'blue', 'red', 'green', 'yellow', 'purple',
    'happy', 'sad', 'excited', 'angry', 'calm',
    'sun', 'moon', 'star', 'cloud', 'rain',
    'ocean', 'beach', 'mountain', 'forest', 'river',
    'music', 'art', 'book', 'movie', 'dance',
    'pizza', 'burger', 'pasta', 'sushi', 'cake',
    'computer', 'phone', 'camera', 'guitar', 'piano',
    'friend', 'family', 'love', 'laughter', 'happiness',
    'adventure', 'dream', 'wonder', 'magic', 'mystery',
    'candle', 'fire', 'snow', 'breeze', 'starlight',
    'laughter', 'smile', 'hug', 'kiss', 'whisper',
    'wanderlust', 'explore', 'discovery', 'journey', 'treasure',
    'kindness', 'gratitude', 'harmony', 'serenity', 'bliss',
    'inspire', 'imagine', 'create', 'innovate', 'discover'
  ];

  let randomText = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    randomText += words[randomIndex] + ' ';
  }
  return randomText.trim();
}

const signupRouter = express.Router()

signupRouter.post('/', async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body
    const encryptedPassword = await bcrypt.hash(password, 10)
    const newUser = await pool.query(
      `INSERT INTO users (firstname, lastname, email, password) VALUES ('${firstname}', '${lastname}', '${email}', '${encryptedPassword}') RETURNING id`,
    )
    
    const randomData = generateRandomText(10)

    await pool.query(
      `INSERT INTO user_data (user_id, data) VALUES ('${newUser.rows[0].id}', '${randomData}')`,
    )

    res.status(200).json({ message: 'Successfully Signedup' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default signupRouter
