import express from "express";
import fetch from "node-fetch"; // musst du mit npm install node-fetch installieren

const app = express();
const PORT = 3000;

// deine Amazon API Daten (ergänzen!)
const ACCESS_KEY = "DEIN_ACCESS_KEY";
const SECRET_KEY = "DEIN_SECRET_KEY";
const PARTNER_TAG = "DEIN_PARTNER_TAG"; // z.B. deinAffiliate-21
const REGION = "eu-west-1"; // Europa

// Beispiel-Route
app.get("/search", async (req, res) => {
  const query = req.query.query;

  // Hier musst du die Anfrage an die Amazon Product Advertising API bauen.
  // Amazon verlangt eine signierte Request-URL mit AccessKey/SecretKey.
  // Für Demo-Zwecke simulieren wir die Daten:
  const dummyProducts = [
    { title: "Laptop 1", price: 499, listPrice: 999, url: "https://amazon.de", image: "https://via.placeholder.com/200" },
    { title: "Laptop 2", price: 799, listPrice: 1299, url: "https://amazon.de", image: "https://via.placeholder.com/200" }
  ];

  // Rabatt berechnen und sortieren
  const sorted = dummyProducts.map(p => {
    const discount = Math.round(((p.listPrice - p.price) / p.listPrice) * 100);
    return { ...p, discount };
  }).sort((a, b) => b.discount - a.discount);

  res.json(sorted);
});

app.listen(PORT, () => console.log(`Server läuft auf http://localhost:${PORT}`));
