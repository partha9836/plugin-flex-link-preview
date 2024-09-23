import React from "react";
import { FlexPlugin } from "@twilio/flex-plugin";
import CustomMessage from "./components/CustomMessage"; // Import your custom message component

const PLUGIN_NAME = "FlexLinkPreviewPlugin";

export default class FlexLinkPreviewPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  async init(flex, manager) {
    // Replace the default message component with the CustomMessage component
    flex.MessageListItem.Content.add(<CustomMessage key="link-preview" />, {
      if: (props) =>
        props.message.source.body &&
        this.containsUrl(props.message.source.body),
    });
  }

  containsUrl(messageBody) {
    // Basic regex to detect a URL in the message body
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return urlRegex.test(messageBody);
  }
}
