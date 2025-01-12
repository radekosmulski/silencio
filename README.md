# Silencio

A Chrome extension that modifies x.com (formerly twitter.com) to automatically switch from "For you" to "Following" feed and removes the "For you" tab entirely.

## Features

- Automatically switches to "Following" feed when "For you" is selected
- Removes the "For you" tab from the navigation
- Runs on both x.com and twitter.com domains

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/radekosmulski/silencio.git
   ```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" in the top right corner

4. Click "Load unpacked" and select the directory containing the extension files

## Files

- `manifest.json` - Extension configuration
- `content.js` - The main script that handles the modifications
