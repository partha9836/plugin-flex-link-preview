# Flex Link Preview Plugin

This [Twilio Flex](https://www.twilio.com/en-us/flex?utm_source=google&utm_medium=cpc&utm_term=twilio%20flex&utm_campaign=G_S_NAMER_Brand_Twilio_Tier1&cq_plac=&cq_net=g&cq_pos=&cq_med=&cq_plt=gp&gad_source=1&gclid=Cj0KCQjwo8S3BhDeARIsAFRmkONv16sKzCCaQtFsD_SNxizYWWiR_MBVdRwyha1jBwYPY94t8UpvFXoaAmJnEALw_wcB) Plugin enhances the chat functionality by generating rich link previews for URLs shared in conversations. It leverages the [LinkPreview API](https://www.linkpreview.net/) to fetch metadata, such as the title, description, and images of links shared by users, providing a more engaging and informative chat experience.

![demo_link_preview-flex](https://github.com/user-attachments/assets/34cdf540-ed7c-46bc-8276-9d268c91c895)



## Features

- Automatically generates link previews for URLs shared in Twilio Flex web chat.
- Displays metadata such as title, description, and a preview image.
- Fully customizable to match the existing Flex UI theme.
- Optimized for different URL types and previews.

## Prerequisites

- Twilio Flex account
- [Node.js](https://nodejs.org/en) (version 18.x or higher)
- A LinkPreview API key ([Sign up](https://my.linkpreview.net/) for an API key here)
- Flex Plugins CLI

## Installation

Follow these steps to install and run the Flex Link Preview Plugin:

Clone this repository:

```bash

git clone https://github.com/partha9836/plugin-flex-link-preview.git
cd plugin-flex-link-preview
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
twilio flex:plugins:deploy --changelog "Initial deployment of Link Preview Plugin" --major --description "This version introduces the Link Preview feature for chat"
twilio flex:plugins:release --plugin flex-link-preview@1.0.0 --description "Releasing the initial version of the Link Preview Plugin"
```
**Explanation**

--changelog adds a message explaining the changes in the plugin.
--major flags this as a major release.
--plugin flex-link-preview@1.0.0 specifies the plugin and its version.
--description provides a description of the plugin for the release.

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
/* src/components/CustomMessage.css */
.link-preview {
  border: 1px solid rgba(227, 227, 227, 0.5); /* Light border with transparency */
  border-radius: 5px; /* Rounded corners */
  padding: 15px;
  margin-top: 8px;
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  background-color: #cce4ff; /* Set background color */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  max-width: 350px; /* Fixed width for the preview box */
  overflow: hidden; /* Prevent overflow */
}

.preview-image {
  max-width: 100%; /* Ensure image fits within the box */
  max-height: 150px; /* Set maximum height for the image */
  width: auto; /* Maintain aspect ratio */
  height: auto; /* Maintain aspect ratio */
  object-fit: cover;
  border-radius: 5px; /* Rounded corners for the image */
  margin-bottom: 10px; /* Space below the image */
  padding-top: 10px; /* Add padding above the image */
}

.preview-content {
  display: flex;
  flex-direction: column; /* Stack title, description, and link vertically */
}

/* Override default styles with increased specificity */
.custom-message .link-preview h4 {
  font-size: 16px; /* Decrease font size for the title */
  font-weight: bold; /* Bold title for emphasis */
  color: black; /* Set title color to white */
  margin: 10px 0 5px 0; /* Margin for spacing below title */
}

.custom-message .link-preview p {
  font-size: 14px; /* Desired font size for the description */
  color: black; /* Set description text color to white */
  margin: 0 0 10px 0; /* Margin for spacing below description */
}

.preview-content a {
  color: blue; /* Set link color to blue */
  text-decoration: none;
  margin-top: 5px; /* Space above the link */
}

.preview-content a:hover {
  text-decoration: underline; /* Underline on hover */
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

Make your changes to the plugin files (e.g., modifying **CustomMessage.js** or **CustomMessage.css**).

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
