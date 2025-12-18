Modify my existing Flutter mobile application so that it runs on Flutter Web but behaves and looks exactly like a mobile app, suitable for embedding inside a portfolio using an iframe.

Requirements

Mobile-Only Layout

Force the app to render in fixed mobile dimensions (iPhone-like).

App should NOT stretch on large screens.

Center the app on desktop browsers.

Recommended size:

Width: 390px

Height: 844px

Preserve Existing App

Do NOT rewrite screens.

Do NOT change navigation logic.

Keep all existing routes, Bloc, providers, and services intact.

Mobile-App Look & Feel

Disable web scrollbars.

Prevent zooming (Ctrl + scroll).

No right-click context menu.

No desktop-style resizing behavior.

Safe Area & Gestures

Respect SafeArea.

Keep mobile gestures (back, swipe, bottom navigation).

Web Compatibility

Ensure compatibility with Flutter Web.

If platform checks are needed, use kIsWeb.

Single Entry Point Change

Apply all layout restrictions at the root level (main.dart or App widget).

Do not modify individual screens.

Expected Output

A root widget that:

Wraps the app in a Center

Uses a fixed SizedBox for mobile dimensions

Works identically on Android, iOS, and Web

Example structure:

Center
  └── SizedBox (390 × 844)
        └── MaterialApp
              └── Existing App

Extra (Nice to Have)

Optional mobile frame background color outside the app

Clean separation of web-specific logic

Goal

The final Flutter Web build should:

Look like a real mobile app

Feel like a native app

Be suitable for embedding inside an iframe

PASTE BELOW PROMPT FOR THE APP TO BE CREATED FROM FLUTTER APP TO FLUTTER WEB TO USE FOR MOBILE SIZE


Require zero React rewrite

Implement this cleanly and professionally.
