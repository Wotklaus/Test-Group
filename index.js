const express = require('express');
const contentful = require('contentful');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const app = express();

// --- Contentful Client Initialization ---
const client = contentful.createClient({
  space: 'krs6r58p0jij',
  accessToken: 'zDApEbuZmALKNx6w62jGUtBM83EUd4dRAVIso9mhmfY'
});

// --- Supabase Client Initialization ---
const supabaseUrl = 'https://arakkhlncenusrbqtijk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyYWtraGxuY2VudXNyYnF0aWprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3NzU4OTAsImV4cCI6MjA3ODM1MTg5MH0.0b-aKFCEyjp2FtuKcsdc0n7hQwFChFWBXrV0uX60ads';
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(express.static(path.join(__dirname, 'public')));

// Utility function to extract plain text from Contentful rich text fields
function extractTextFromRichText(richTextField) {
  try {
    return richTextField.content[0].content[0].value;
  } catch (e) {
    return '';
  }
}

// ==== CONTENTFUL ENDPOINT ====
app.get('/api/message', async (req, res) => {
  try {
    const entries = await client.getEntries();

    if (entries.items.length > 0 && entries.items[0].fields) {
      const fields = entries.items[0].fields;
      const title = fields.title ? extractTextFromRichText(fields.title) : undefined;
      const message = fields.message;

      res.json({
        title: title || "No title",
        text: message || "No message available in Contentful..."
      });
    } else {
      res.json({
        title: "No title",
        text: "No message available in Contentful..."
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ==== SUPABASE ENDPOINTS ====

// Get all students
app.get('/api/students', async (req, res) => {
  const { data, error } = await supabase.from('students').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Get all enrollments
app.get('/api/enrollments', async (req, res) => {
  const { data, error } = await supabase.from('enrollments').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Get enrollments with related student data - xd
app.get('/api/enrollments/details', async (req, res) => {
  const { data, error } = await supabase
    .from('enrollments')
    .select('id,course,grade,students(name,email)');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});