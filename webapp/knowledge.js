// MasterOfKnowledge — lore and little-known mechanics (supplied by the site owner, from leonidaverse.com's Secrets/Tips; Nov 2026).
const KNOWLEDGE = [
  { g: "Secrets & lore", e: "🏚️", n: "The house hidden in GTA San Andreas in 2021",
    t: "In 2021 a photo of an unknown house with a UFO above it appeared on the wall of the Lil' Probe'Inn bar in GTA San Andreas – The Definitive Edition. Players have found that exact house in Belville in GTA 6 — so the photo was likely a first look at the game. Break into its garage to find the den of a conspiracy theorist convinced he's living inside a video game.",
    map: [-787, 2831], prec: "area" },
  { g: "Secrets & lore", e: "🐎", n: "The Manifest Canyon monument mystery",
    t: "Near Manifest Canyon stands a monument to \"Leonidan Supremacy\": four stallions marked with strange symbols around a pillar and a globe. The plaque says it was built in 1982 and that the horses stand for wildlife, corruption, humanity and yeyo. The statue beeps in what might be Morse code. Nobody has cracked it yet.",
    map: [-5861, 5542], prec: "approx" },
  { g: "Mechanics & tips", e: "🚗", n: "Flip a car, push a boat into the water",
    t: "Barely mentioned by the game: walk into a vehicle and keep pushing until a prompt appears, then hold Square (X on Xbox) to shove it. Push a beached boat or jet ski back into the water, or roll a flipped car back onto its wheels without paying for a tow." },
  { g: "Mechanics & tips", e: "🎯", n: "Focus Mode finds hidden encounters",
    t: "Heard something strange? Switch to Focus Mode — a circular sound wave shows when an unusual encounter is waiting nearby. It's the easiest way to track down Cool Dog's barking, for example." },
  { g: "Mechanics & tips", e: "🕒", n: "Every shop is open 24/7",
    t: "A haircut at 3 a.m.? None of Leonida's 700+ stores ever close. Rockstar design director Katie Pica says the team chose convenience over realism — and always-open shops also mean more chances to rob them." },
];

// "Before you start" — spoiler-free tips checked since release (supplied by the site owner, Nov 2026).
const STARTER_TIPS = [
  { e: "🎮", n: "Your first hours", tips: [
    "Save manually at the start of each chapter",
    "Deposit your cash at an ATM as soon as you have the BuckMe app",
    "Keep a spare outfit in your car's trunk",
    "Register the cars you want to keep at a Pay 'n' Spray",
    "Buy your weapons rather than picking them up",
    "Fish, play pool or golf to raise Focus",
  ]},
  { e: "💰", n: "Before a robbery", tips: [
    "Check the potential take and security in the map index",
    "Bring your partner if security is medium or high",
    "Wear a mask or hat — then take it off afterwards",
    "Destroy the camera footage before leaving",
    "Two bags per character: pass extras to your partner",
  ]},
  { e: "🚨", n: "After a crime", tips: [
    "Change outfit and car",
    "Holster your weapon",
    "Split up with your partner and leave the area",
    "Sell the loot quickly — it's lost if you die",
  ]},
];

// Recommended settings (Xbox; same menus on PS5) — supplied by the site owner, Nov 2026.
// [tab, setting, default, recommended, why]
const SETTINGS_QUICK = [
  "Motion Blur Strength: 3 → 1",
  "Camera Shake: Off",
  "Cinematic kill-shot and crash cameras: 3 → 0 or 1",
  "Subtitles: On for every conversation",
  "Coming from GTA 5? Use the Classic control scheme — sprint goes back to A (Cross on PS5)",
];
const SETTINGS = [
  ["Display", "Motion Blur Strength", "3", "1 (0 for maximum sharpness)", ""],
  ["Camera", "Camera Bob", "10", "0–3", "if walking makes you queasy"],
  ["Camera", "Cinematic Kill Shot Frequency", "3", "0–1", ""],
  ["Camera", "Cinematic Vehicle Crash Frequency", "3", "0–1", "keeps you in control after a crash"],
  ["Gameplay: aiming & combat", "Targeting", "Partial", "Keep Partial", "Lock-On = GTA 5's automatic lock"],
  ["Controls", "Look / Aim Sensitivity", "6–7", "1–2 steps higher", "if the camera feels slow"],
  ["Controls", "Aim Response Curve", "Standard", "Try Aggressive", "snappier aiming"],
  ["Controls", "Deadzone (left / right stick)", "4", "3", "if your controller doesn't drift"],
  ["Controls", "Adaptive Triggers Resistance", "On", "Lower or Off", "if the triggers feel stiff"],
  ["Controls", "Aim & Look Sensitivity: horizontal/vertical look, horizontal/vertical aim, look & aim acceleration", "—", "3 (all of them)", "lower, steadier camera"],
];
