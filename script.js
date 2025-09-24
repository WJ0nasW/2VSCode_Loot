// ---------- Deine Produktliste hier eintragen ----------
const products = [
  {
    title: "Philips Series 5400 Kaffeevollautomat – LatteGo Milchsystem",
    price: 529.95,
    listPrice: 729.99,
    image: "https://m.media-amazon.com/images/I/41Icg1TrLvL._AC_.jpg",
    url: "https://www.amazon.de/PHILIPS-Espressomaschine-Serie-5400-Kaffeeeinstellungen/dp/B08CBJCQ39?tag=lootmuseum-21"
  },
  {
    title: "JBL",
    price: 84.88,
    listPrice: 99.90,
    image: "https://m.media-amazon.com/images/I/51gXRWPAQXL._AC_SX679_.jpg",
    url: "https://www.amazon.de/JBL-Noise-Cancelling-Bluetooth-Kopfh%C3%B6rer-staubresistent-Stick-Closed-Design-Schwarz/dp/B0C6HTPJZC?tag=lootmuseum-21"
  },
  {
    title: "Xbox Wireless Controller – Carbon Black",
    price: 45.99,
    listPrice: 64.99,
    image: "https://m.media-amazon.com/images/I/61SFyZxcinL._SL1500_.jpg",
    url: "https://www.amazon.de/Xbox-Wireless-Controller-Carbon-Black/dp/B0F2NC69KK?tag=lootmuseum-21"
  },
  {
    title: "Snocks Boxershorts Herren Bio Baumwolle (6er Pack)",
    price: 35.24,
    listPrice: 48.99,
    image: "https://m.media-amazon.com/images/I/81etJIf8QUL._AC_SX569_.jpg",
    url: "https://www.amazon.de/Snocks-Boxershorts-Unterw%C3%A4sche-Unterwasche-Herrenunterw%C3%A4sche/dp/B0779643GC?tag=lootmuseum-21"
  },
  {
    title: "Ohrenschmalz Entferner Otoskop",
    price: 9.98,
    listPrice: 24.99,
    image: "https://m.media-amazon.com/images/I/71RIeKPS3eL._AC_SL1500_.jpg",
    url: "https://www.amazon.de/Ohrenschmalz-Qimic-Ohrreiniger-Ohrenspiegel-Android-Smartphones/dp/B0DQ56WW1C?tag=lootmuseum-21"
  },
  {
    title: "FOSSIBOT Powerstation 2400W AC Ausgängen (4800 W Peak) F2400, Stück mit 200W Solarpanel Power Station",
    price: 949.00,
    listPrice: 1549.00,
    image: "https://m.media-amazon.com/images/I/81H7vQNlA4L._AC_SL1500_.jpg",
    url: "https://www.amazon.de/FOSSIBOT-Solargenerator-Solarpanel-Superschnelles-Powerstation/dp/B0BN3WD7DP?tag=lootmuseum-21"
  },
  {
    title: "MSI MAG 256F 24,5 Zoll FHD Gaming Monitor - 1920 x 1080 Rapid IPS Panel, 180 Hz / 1ms GtG",
    price: 79.99,
    listPrice: 147.99,
    image: "https://m.media-amazon.com/images/I/71FMFo6WEnL._AC_SL1500_.jpg",
    url: "https://www.amazon.de/MSI-MAG-256F-Gaming-Monitor/dp/B0CS3WDXRV?tag=lootmuseum-21"
  },
  {
    title: "PERLESMITH TV Wandhalterung, Schwenkbare Neigbare TV Halterung für 26-70 Zoll Flach & Curved Fernseher oder Monitor bis zu 45kg",
    price: 29.98,
    listPrice: 41.97,
    image: "https://m.media-amazon.com/images/I/716lhRv1FKL._AC_SL1500_.jpg",
    url: "https://www.amazon.de/Wandhalterung-Schwenkbare-Halterung-Fernseher-400x400mm-Schwenkbar-Neigbar-400x400-6-Arme/dp/B07KF9TC3J?tag=lootmuseum-21"
  },
  {
    title: "Oral-B Pro Sensitive Clean – ORIGINAL Aufsteckbürsten für Elektrische Zahnbürste – Sanfte Zahnreinigung, Ersatzbürsten mit X-Borsten, Zahnbürstenaufsatz, Briefkastenfähige Verpackung – Weiß, 10 Stück",
    price: 26.81,
    listPrice: 32.99,
    image: "https://m.media-amazon.com/images/I/61CURzktO3L._AC_SL1000_.jpg",
    url: "https://www.amazon.de/Oral-B-Aufsteckb%C3%BCrsten-Zahnreinigung-Zahnb%C3%BCrstenaufsatz-briefkastenf%C3%A4hige/dp/B0BWNTF2YF?tag=lootmuseum-21"
  },
  {
    title: "Oral-B iO Series 5 Plus Edition Elektrische Zahnbürste/Electric Toothbrush",
    price: 117.12,
    listPrice: 199.99,
    image: "https://m.media-amazon.com/images/I/81thIKcqGqL._AC_SY450_.jpg",
    url: "https://www.amazon.de/Oral-B-Elektrische-Zahnb%C3%BCrste-Toothbrush-Aufsteckb%C3%BCrsten/dp/B0D5D3WBN5?tag=lootmuseum-21"
  },
  {
    title: "Echo Show 10 (3. Generation, 2020) | Hochauflösendes Smart Display mit Bewegungsfunktion und Alexa",
    price: 169.99,
    listPrice: 242.99,
    image: "https://m.media-amazon.com/images/I/61X6K7vz0WL._AC_SL1000_.jpg",
    url: "https://www.amazon.de/zertifiziert-und-generaluberholt-echo-show-10-hochauflosendes-smart-display-mit-bewegungsfunktion-und-alexa-anthrazit/dp/B084NYNG85?tag=lootmuseum-21"
  }


  
  //hier einfach weitere Produkte  
];


// JSON-LD für SEO automatisch erzeugen
function injectJSONLD(products) {
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "ItemList",
    "name": "Lootmuseum Amazon Deals",
    "itemListElement": products.map((p, i) => ({
      "@type": "Product",
      "position": i + 1,
      "name": p.title,
      "image": p.image,
      "offers": {
        "@type": "Offer",
        "url": p.url,
        "priceCurrency": "EUR",
        "price": p.price.toString(),
        "availability": "https://schema.org/InStock"
      }
    }))
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(jsonLd, null, 2);
  document.head.appendChild(script);
}

// Beim Laden der Seite JSON-LD einfügen
injectJSONLD(products);

// ---------- Hilfsfunktionen ----------
const $ = id => document.getElementById(id);

function calcDiscount(listPrice, price) {
  if (!listPrice || !price) return null;
  const diff = listPrice - price;
  if (diff <= 0) return 0;
  return Math.round((diff / listPrice) * 100);
}

// ---------- Rendering ----------
function renderList() {
  const results = $("results");
  const status = $("status");

  // Produkte mit Rabatt berechnen
  const mapped = products.map(p => ({ ...p, discount: calcDiscount(p.listPrice, p.price) }));

  // Sortierung: nach Rabatt absteigend
  mapped.sort((a, b) => {
    const da = a.discount ?? -1;
    const db = b.discount ?? -1;
    if (db !== da) return db - da;
    return (a.price ?? 999999) - (b.price ?? 999999);
  });

  status.textContent = ` ${mapped.length} Produkte — sortiert nach höchstem Rabatt.`;

  results.innerHTML = "";
  mapped.forEach(p => {
    const el = document.createElement("article");
    el.className = "item";

    const link = document.createElement("a");
    link.href = p.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const img = document.createElement("img");
    img.src = p.image || "https://via.placeholder.com/300x300.png?text=Kein+Bild";
    img.alt = p.title;
    img.loading = "lazy"; // Lazy Loading aktivieren

    const title = document.createElement("div");
    title.className = "title";
    title.textContent = p.title;

    const prices = document.createElement("div");
    prices.className = "prices";
    if (p.listPrice) {
      const del = document.createElement("del");
      del.textContent = `${p.listPrice.toFixed(2)} €`;
      prices.appendChild(del);
    }
    if (p.price) {
      const now = document.createElement("div");
      now.className = "now";
      now.textContent = `${p.price.toFixed(2)} €`;
      prices.appendChild(now);
    }

    const disc = document.createElement("div");
    disc.className = "discount";
    disc.textContent = p.discount ? `-${p.discount}%` : "kein Rabatt";

    link.appendChild(img);
    link.appendChild(title);

    el.appendChild(link);
    el.appendChild(prices);
    el.appendChild(disc);

    results.appendChild(el);
  });
}

// ---------- Init ----------
renderList();
