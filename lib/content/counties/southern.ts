import type { County } from "./types";

// Southern California and the Central Coast.
// Employer names are well-known public information; they're listed as major local employers only.

export const southernCounties: County[] = [
  {
    slug: "los-angeles-county",
    name: "Los Angeles",
    region: "Southern California",
    seat: "Los Angeles",
    cities: ["Los Angeles", "Long Beach", "Glendale", "Santa Clarita", "Lancaster", "Palmdale", "Pasadena", "Torrance", "Burbank", "Pomona"],
    economy:
      "Los Angeles County has the largest workforce in California. Entertainment, healthcare, aerospace, apparel manufacturing and hospitality all employ huge numbers of people, and the Ports of Los Angeles and Long Beach anchor a massive shipping and warehouse network.",
    industries: ["entertainment", "healthcare", "ports", "logistics", "aerospace", "hospitality", "manufacturing", "government"],
    employers: [
      "Los Angeles County government",
      "University of California, Los Angeles (UCLA)",
      "Kaiser Permanente",
      "Cedars-Sinai Medical Center",
      "The Walt Disney Company",
      "Northrop Grumman",
    ],
  },
  {
    slug: "orange-county",
    name: "Orange",
    region: "Southern California",
    seat: "Santa Ana",
    cities: ["Anaheim", "Santa Ana", "Irvine", "Huntington Beach", "Garden Grove", "Fullerton", "Orange", "Costa Mesa", "Mission Viejo"],
    economy:
      "Orange County's economy runs on tourism, healthcare, medical devices, technology and real estate. Theme parks, hotels and restaurants employ tens of thousands of hourly workers, while Irvine is home to many corporate headquarters.",
    industries: ["hospitality", "healthcare", "biotech", "technology", "finance", "retail"],
    employers: [
      "Disneyland Resort",
      "University of California, Irvine",
      "Providence (St. Joseph Health)",
      "Kaiser Permanente",
      "Hoag Memorial Hospital",
      "Edwards Lifesciences",
    ],
  },
  {
    slug: "san-diego-county",
    name: "San Diego",
    region: "Southern California",
    seat: "San Diego",
    cities: ["San Diego", "Chula Vista", "Oceanside", "Escondido", "Carlsbad", "El Cajon", "Vista", "San Marcos"],
    economy:
      "San Diego County is shaped by the military, defense contracting, biotech and tourism. Naval Base San Diego and Camp Pendleton support large civilian and contractor workforces, and the region is one of the country's biggest life-sciences hubs.",
    industries: ["military", "biotech", "healthcare", "hospitality", "technology", "education"],
    employers: [
      "University of California, San Diego",
      "Sharp HealthCare",
      "Scripps Health",
      "Qualcomm",
      "General Atomics",
      "Defense contractors serving Naval Base San Diego and Camp Pendleton",
    ],
  },
  {
    slug: "riverside-county",
    name: "Riverside",
    region: "Southern California",
    seat: "Riverside",
    cities: ["Riverside", "Moreno Valley", "Corona", "Temecula", "Murrieta", "Jurupa Valley", "Menifee", "Palm Springs", "Indio"],
    economy:
      "Riverside County is part of the Inland Empire, one of the largest warehouse and distribution regions in the world. The Coachella Valley adds farming and resort tourism, and Temecula has a growing wine country.",
    industries: ["logistics", "agriculture", "hospitality", "healthcare", "construction", "wine"],
    employers: [
      "Riverside County government",
      "University of California, Riverside",
      "Kaiser Permanente",
      "Amazon fulfillment centers",
      "Eisenhower Health",
      "Riverside University Health System",
    ],
  },
  {
    slug: "san-bernardino-county",
    name: "San Bernardino",
    region: "Southern California",
    seat: "San Bernardino",
    cities: ["San Bernardino", "Fontana", "Rancho Cucamonga", "Ontario", "Victorville", "Rialto", "Chino", "Redlands", "Hesperia"],
    economy:
      "San Bernardino County is a center of warehousing, trucking and rail in the Inland Empire, with Ontario's airport and major rail yards moving goods nationwide. Healthcare, retail and military installations in the high desert are also big employers.",
    industries: ["logistics", "ports", "healthcare", "manufacturing", "military", "retail"],
    employers: [
      "Loma Linda University Health",
      "Stater Bros. Markets",
      "Amazon fulfillment centers",
      "UPS (Ontario hub)",
      "Kaiser Permanente",
      "BNSF Railway",
    ],
  },
  {
    slug: "ventura-county",
    name: "Ventura",
    region: "Southern California",
    seat: "Ventura",
    cities: ["Oxnard", "Thousand Oaks", "Simi Valley", "Ventura", "Camarillo", "Moorpark", "Santa Paula", "Fillmore"],
    economy:
      "Ventura County mixes rich farmland — strawberries, lemons and celery — with biotech, a naval base and the Port of Hueneme, one of the busiest ports for imported cars and produce.",
    industries: ["agriculture", "biotech", "military", "ports", "healthcare"],
    employers: [
      "Naval Base Ventura County",
      "Amgen",
      "Port of Hueneme",
      "Community Memorial Health",
      "Patagonia",
      "Ventura County government",
    ],
  },
  {
    slug: "imperial-county",
    name: "Imperial",
    region: "Southern California",
    seat: "El Centro",
    cities: ["El Centro", "Calexico", "Brawley", "Imperial", "Holtville"],
    economy:
      "Imperial County is a winter-vegetable and cattle powerhouse on the Mexican border. Farming, cross-border trade, renewable energy and two state prisons provide many of the area's jobs.",
    industries: ["agriculture", "logistics", "energy", "corrections", "government"],
    employers: [
      "Imperial Irrigation District",
      "El Centro Regional Medical Center",
      "Calipatria and Centinela State Prisons",
      "Imperial County government",
      "Local growers, packers and shippers",
    ],
  },
  {
    slug: "santa-barbara-county",
    name: "Santa Barbara",
    region: "Central Coast",
    seat: "Santa Barbara",
    cities: ["Santa Maria", "Santa Barbara", "Lompoc", "Goleta", "Carpinteria", "Solvang", "Buellton"],
    economy:
      "Santa Barbara County combines a university town, a busy tourism coast and the farmland of the Santa Maria Valley, known for strawberries and wine. Vandenberg Space Force Base supports aerospace and defense jobs.",
    industries: ["agriculture", "hospitality", "education", "aerospace", "wine", "healthcare"],
    employers: [
      "University of California, Santa Barbara",
      "Vandenberg Space Force Base",
      "Cottage Health",
      "Marian Regional Medical Center",
      "Santa Barbara County government",
    ],
  },
  {
    slug: "san-luis-obispo-county",
    name: "San Luis Obispo",
    region: "Central Coast",
    seat: "San Luis Obispo",
    cities: ["Paso Robles", "San Luis Obispo", "Atascadero", "Arroyo Grande", "Grover Beach", "Morro Bay", "Pismo Beach"],
    economy:
      "San Luis Obispo County is known for Paso Robles wine country, Cal Poly and coastal tourism. The Diablo Canyon power plant and several state facilities are also major employers.",
    industries: ["wine", "hospitality", "education", "energy", "corrections", "healthcare"],
    employers: [
      "Cal Poly San Luis Obispo",
      "PG&E (Diablo Canyon Power Plant)",
      "California Men's Colony",
      "Atascadero State Hospital",
      "San Luis Obispo County government",
    ],
  },
  {
    slug: "monterey-county",
    name: "Monterey",
    region: "Central Coast",
    seat: "Salinas",
    cities: ["Salinas", "Seaside", "Monterey", "Marina", "Soledad", "Greenfield", "King City", "Carmel-by-the-Sea"],
    economy:
      "The Salinas Valley is called the \"Salad Bowl of the World,\" with huge numbers of farmworkers and packing-house employees. The Monterey Peninsula adds hotels, golf resorts and military education institutions.",
    industries: ["agriculture", "foodProcessing", "hospitality", "military", "healthcare"],
    employers: [
      "Taylor Farms",
      "Pebble Beach Company",
      "Montage Health (Community Hospital of the Monterey Peninsula)",
      "Salinas Valley Health",
      "Defense Language Institute and Naval Postgraduate School",
      "Monterey Bay Aquarium",
    ],
  },
  {
    slug: "santa-cruz-county",
    name: "Santa Cruz",
    region: "Central Coast",
    seat: "Santa Cruz",
    cities: ["Santa Cruz", "Watsonville", "Scotts Valley", "Capitola"],
    economy:
      "Santa Cruz County pairs a university and beach-tourism town with the farmland around Watsonville, a leading center for berries and apples. Many residents also commute to Silicon Valley tech jobs.",
    industries: ["agriculture", "foodProcessing", "education", "hospitality", "healthcare"],
    employers: [
      "University of California, Santa Cruz",
      "Driscoll's",
      "Martinelli's",
      "Dominican Hospital",
      "Santa Cruz Beach Boardwalk",
    ],
  },
  {
    slug: "san-benito-county",
    name: "San Benito",
    region: "Central Coast",
    seat: "Hollister",
    cities: ["Hollister", "San Juan Bautista"],
    economy:
      "San Benito County is a farming community growing lettuce, vegetables and orchard crops, with food processing, construction and a growing number of residents who commute to Santa Clara County.",
    industries: ["agriculture", "foodProcessing", "construction", "healthcare"],
    employers: [
      "Hazel Hawkins Memorial Hospital",
      "San Benito County government",
      "Local growers and food processors",
    ],
  },
];
