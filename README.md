📱 Interactive Portfolio with Real Mobile Apps (Flutter Web + React)

This portfolio showcases real, running mobile applications inside realistic device frames.
Instead of screenshots, users interact with actual apps embedded using iframes — creating the feel of a real mobile device with installed apps.

🚀 What This Portfolio Does

Converts Flutter mobile apps to Flutter Web

Deploys Flutter Web apps to Netlify

Embeds them inside a React portfolio

Displays apps inside realistic mobile device frames

Allows users to:

Open apps from a device home screen

Interact with real app flows

Navigate back like a real device

This creates a product-level demo experience, not a static portfolio.

🧠 High-Level Architecture
Flutter Mobile App
        ↓
Flutter Web Build
        ↓
Deploy to Netlify
        ↓
Public App URL
        ↓
React Portfolio
        ↓
Mobile Device Frame + iframe

🛠 Tech Stack
Mobile Apps

Flutter (Dart)

Flutter Web

Portfolio

React (Vite)

CSS (no UI libraries)

iframe embedding

Hosting

Netlify (Flutter Web)

Vercel / Netlify (React Portfolio)

📂 Repository Structure (Portfolio)
src/
 ├── components/
 │    ├── MobileFrame.jsx
 │    ├── LaptopFrame.jsx
 │    └── DeviceFrame.css
 ├── pages/
 │    └── Projects.jsx
 ├── App.jsx
 ├── main.jsx
 └── index.css

🔄 Step 1: Convert Flutter Mobile App to Flutter Web
Enable Web Support
flutter config --enable-web


Verify:

flutter devices


You should see:

Chrome

Web Server

Lock App to Mobile Size (Important)

In your Flutter root widget:

return Center(
  child: SizedBox(
    width: 390,
    height: 844,
    child: MyApp(),
  ),
);


This ensures the app behaves like a mobile app, not a website.

🎨 Step 2: Fix Flutter Web Background (CRITICAL)

Flutter Web uses an HTML canvas.
To avoid white borders in rounded device frames:

Edit:
web/index.html


Change <body> to:

<body style="margin:0; background-color: transparent;">


This prevents white/grey halos inside the device frame.

🏗 Step 3: Build Flutter Web
flutter clean
flutter build web


This generates:

build/web/


⚠️ Only this folder is deployed.

🌍 Step 4: Deploy Flutter Web to Netlify
Option A: Drag & Drop (Fastest)

Go to: https://app.netlify.com/drop

Drag build/web

Wait for deployment

You’ll get a URL like:

https://fitnessappharsh.netlify.app

Fix Routing (Important)

Inside build/web/, create a file:

_redirects


Content:

/*    /index.html   200


Prevents white screen on refresh.

⚛️ Step 5: Embed Flutter App in React Portfolio
Use iframe (Mobile App)
<iframe
  src="https://fitnessappharsh.netlify.app"
  className="mobile-iframe"
/>


The iframe loads the real Flutter app

React provides the device frame

Flutter handles scrolling & logic

📱 Step 6: Mobile Device Frame (React)

Key CSS rules:

.mobile-device {
  aspect-ratio: 390 / 844;
  overflow: hidden;
}

.mobile-iframe {
  width: 100%;
  height: 100%;
  border: none;
  background: #000;
}


This ensures:

No overflow

No white borders

Perfect rounded corners

🧩 Step 7: Real Device Experience (Launcher Concept)

Instead of directly opening apps:

Show a mobile home screen

Display multiple app icons

Clicking an icon:

Opens the app inside the same device

A Home/Back button returns to launcher

This feels like:

“A real phone with installed apps”

🧠 State Management (React)
const [activeApp, setActiveApp] = useState(null);


null → Home screen

"fitness" → Fitness App iframe

"housing" → Another app

No iframe reload hacks.
No resizing.
Smooth transitions.

❌ What This Approach Avoids

❌ No screenshots

❌ No fake demos

❌ No rebuilding Flutter apps in React

❌ No performance-heavy emulation

✅ Benefits

Real app experience

Recruiter-friendly

High visual impact

Clean architecture

Scalable for many apps

🎯 Ideal For

Flutter Developers

Mobile App Developers

Internship / Placement portfolios

Product-focused roles

📌 Key Takeaway

This portfolio does not show apps.
It lets users use them.

That difference matters.

🚀 Future Enhancements

Fullscreen app mode

App open animations

Tablet & laptop device views

Lazy loading iframes

OS-style transitions

🧑‍💻 Author

Harsh
Flutter & Application Developer
