# Flex Link Preview Plugin

This Twilio Flex Plugin enhances the chat functionality by generating rich link previews for URLs shared in conversations. It leverages the [LinkPreview API](https://www.linkpreview.net/) to fetch metadata, such as the title, description, and images of links shared by users, providing a more engaging and informative chat experience.

## Features

- Automatically generates link previews for URLs shared in Twilio Flex web chat.
- Displays metadata such as title, description, and a preview image.
- Fully customizable to match the existing Flex UI theme.
- Optimized for different URL types and previews.

## Prerequisites

- Twilio Flex account
- [Node.js](https://nodejs.org/en) (version 18.x or higher)
- A LinkPreview API key ([Sign up](https://my.linkpreview.net/) for an API key here)

## Installation

Follow these steps to install and run the Flex Link Preview Plugin:

Clone this repository:

```bash

git clone https://github.com/your-username/flex-link-preview.git
cd flex-link-preview
```

## Install the required dependencies:

```bash
npm install
```

Create a .env file in the root directory of the project to store your environment variables:

```bash
touch .env
```

Add your [LinkPreview API](https://www.linkpreview.net/) key in the .env file:

```bash
REACT_APP_LINK_PREVIEW_API_KEY=your_linkpreview_api_key
```

Build and deploy the plugin to your Twilio Flex instance:

```bash

npm run build
twilio flex:plugins:deploy --changelog "Initial deployment of Link Preview Plugin"
twilio flex:plugins:release --plugin flex-link-preview@X.X.X --description "Releasing the Link Preview Plugin"
```

After successful deployment, the plugin should now be visible in your Twilio Flex instance.

## Configuration

LinkPreview API Setup

To use this plugin, you need a LinkPreview API key. You can sign up for free and obtain your API key at [LinkPreview.net](https://www.linkpreview.net/).

Once you have the API key, add it to your .env file as follows:

```bash
REACT_APP_LINK_PREVIEW_API_KEY=your_linkpreview_api_key
```

This key is used to call the LinkPreview API and fetch the necessary metadata for URLs shared in chat conversations.

## Customization

The link preview layout is customizable via the CSS file (CustomMessage.css). You can modify styles like the preview box's size, font, image dimensions, and more to match your Flex UI theme.

### Example Customization

Here is an example CSS snippet that customizes the appearance of link previews:

```css
.link-preview {
  border: 1px solid rgba(227, 227, 227, 0.5);
  border-radius: 5px;
  padding: 15px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  max-width: 350px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.preview-image {
  max-width: 100%;
  max-height: 150px;
  object-fit: cover;
  border-radius: 5px;
}

.preview-content h4 {
  font-size: 18px;
  font-weight: bold;
  color: black;
}

.preview-content p {
  font-size: 14px;
  color: black;
  font-weight: bold;
}

.preview-content a {
  color: blue;
  text-decoration: none;
}
```

## Usage

Once the plugin is deployed, any URLs shared in a Twilio Flex chat will automatically generate a preview. The preview includes:

- Title: Extracted from the webpage.
- Description: A brief summary of the page.
- Image: A preview image (if available).
- Link: The original link, clickable by users.

## Development

If you'd like to modify or extend the plugin, follow these steps:

Install Twilio CLI and Flex Plugin CLI if you haven't already:

```bash
npm install -g twilio-cli @twilio-labs/plugin-flex
```

Run the plugin locally:

```bash
twilio flex:plugins:start
```

Make your changes to the plugin files (e.g., modifying CustomMessage.js or CustomMessage.css).

After testing, commit and push your changes to GitHub:

```bash
git add .
git commit -m "Made updates to the link preview feature"
git push origin main
```

## Deploy the updated plugin:

```bash
twilio flex:plugins:deploy
twilio flex:plugins:release --plugin flex-link-preview@X.X.X --description "Updated link preview feature"
```

## License

This plugin is open-source under the [MIT](https://en.wikipedia.org/wiki/MIT_License) License. See the LICENSE file for more details.
