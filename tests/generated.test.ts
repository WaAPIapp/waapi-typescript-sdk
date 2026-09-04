/**
 * Generated payload tests — one per client action.
 *
 * DO NOT EDIT. Regenerate with:
 *
 *     node scripts/sync-actions.mjs ../eazewhatsapp-proxy
 *
 * These methods hold no logic: they name an action and forward named fields.
 * So their real failure modes are a wrong action string and a field that is
 * dropped or swapped with its neighbour, and both are visible in the request
 * that leaves the SDK. Sample values carry each field's own name for exactly
 * that reason — identical values could not tell a swap from a correct call.
 */

import { test } from "vitest";
import { expectAction, fake } from "./helpers.js";

test("sendMessage sends the right action", async () => {
  const { client, calls } = fake();

  await client.sendMessage({ chatId: "chatId-value", message: "message-value" });

  expectAction(calls, "send-message", {
  "chatId": "chatId-value",
  "message": "message-value",
  });
});

test("sendMedia sends the right action", async () => {
  const { client, calls } = fake();

  await client.sendMedia({ chatId: "chatId-value" });

  expectAction(calls, "send-media", {
  "chatId": "chatId-value",
  });
});

test("sendSeen sends the right action", async () => {
  const { client, calls } = fake();

  await client.sendSeen({ chatId: "chatId-value" });

  expectAction(calls, "send-seen", {
  "chatId": "chatId-value",
  });
});

test("sendVcard sends the right action", async () => {
  const { client, calls } = fake();

  await client.sendVcard({ chatId: "chatId-value", vCard: { "vCard": "value" } });

  expectAction(calls, "send-vcard", {
  "chatId": "chatId-value",
  "vCard": { "vCard": "value" },
  });
});

test("sendLocation sends the right action", async () => {
  const { client, calls } = fake();

  await client.sendLocation({ chatId: "chatId-value", latitude: 42, longitude: 42 });

  expectAction(calls, "send-location", {
  "chatId": "chatId-value",
  "latitude": 42,
  "longitude": 42,
  });
});

test("getChats sends the right action", async () => {
  const { client, calls } = fake();

  await client.getChats();

  expectAction(calls, "get-chats", {});
});

test("markChatUnread sends the right action", async () => {
  const { client, calls } = fake();

  await client.markChatUnread({ chatId: "chatId-value" });

  expectAction(calls, "mark-chat-unread", {
  "chatId": "chatId-value",
  });
});

test("muteChat sends the right action", async () => {
  const { client, calls } = fake();

  await client.muteChat({ chatId: "chatId-value" });

  expectAction(calls, "mute-chat", {
  "chatId": "chatId-value",
  });
});

test("unmuteChat sends the right action", async () => {
  const { client, calls } = fake();

  await client.unmuteChat({ chatId: "chatId-value" });

  expectAction(calls, "unmute-chat", {
  "chatId": "chatId-value",
  });
});

test("pinChat sends the right action", async () => {
  const { client, calls } = fake();

  await client.pinChat({ chatId: "chatId-value" });

  expectAction(calls, "pin-chat", {
  "chatId": "chatId-value",
  });
});

test("unpinChat sends the right action", async () => {
  const { client, calls } = fake();

  await client.unpinChat({ chatId: "chatId-value" });

  expectAction(calls, "unpin-chat", {
  "chatId": "chatId-value",
  });
});

test("fetchMessages sends the right action", async () => {
  const { client, calls } = fake();

  await client.fetchMessages({ chatId: "chatId-value" });

  expectAction(calls, "fetch-messages", {
  "chatId": "chatId-value",
  });
});

test("getMessageById sends the right action", async () => {
  const { client, calls } = fake();

  await client.getMessageById({ messageId: "messageId-value" });

  expectAction(calls, "get-message-by-id", {
  "messageId": "messageId-value",
  });
});

test("downloadMedia sends the right action", async () => {
  const { client, calls } = fake();

  await client.downloadMedia({ messageId: "messageId-value" });

  expectAction(calls, "download-media", {
  "messageId": "messageId-value",
  });
});

test("getMessageInfoById sends the right action", async () => {
  const { client, calls } = fake();

  await client.getMessageInfoById({ messageId: "messageId-value" });

  expectAction(calls, "get-message-info-by-id", {
  "messageId": "messageId-value",
  });
});

test("deleteMessageById sends the right action", async () => {
  const { client, calls } = fake();

  await client.deleteMessageById({ messageId: "messageId-value" });

  expectAction(calls, "delete-message-by-id", {
  "messageId": "messageId-value",
  });
});

test("editMessage sends the right action", async () => {
  const { client, calls } = fake();

  await client.editMessage({ messageId: "messageId-value", message: "message-value" });

  expectAction(calls, "edit-message", {
  "messageId": "messageId-value",
  "message": "message-value",
  });
});

test("forwardMessage sends the right action", async () => {
  const { client, calls } = fake();

  await client.forwardMessage({ messageId: "messageId-value", chatId: "chatId-value" });

  expectAction(calls, "forward-message", {
  "messageId": "messageId-value",
  "chatId": "chatId-value",
  });
});

test("searchMessages sends the right action", async () => {
  const { client, calls } = fake();

  await client.searchMessages({ query: "query-value" });

  expectAction(calls, "search-messages", {
  "query": "query-value",
  });
});

test("getContacts sends the right action", async () => {
  const { client, calls } = fake();

  await client.getContacts();

  expectAction(calls, "get-contacts", {});
});

test("getNumberId sends the right action", async () => {
  const { client, calls } = fake();

  await client.getNumberId({ number: "number-value" });

  expectAction(calls, "get-number-id", {
  "number": "number-value",
  });
});

test("getCountryCode sends the right action", async () => {
  const { client, calls } = fake();

  await client.getCountryCode({ number: "number-value" });

  expectAction(calls, "get-country-code", {
  "number": "number-value",
  });
});

test("getFormattedNumber sends the right action", async () => {
  const { client, calls } = fake();

  await client.getFormattedNumber({ number: "number-value" });

  expectAction(calls, "get-formatted-number", {
  "number": "number-value",
  });
});

test("isRegisteredUser sends the right action", async () => {
  const { client, calls } = fake();

  await client.isRegisteredUser({ contactId: "contactId-value" });

  expectAction(calls, "is-registered-user", {
  "contactId": "contactId-value",
  });
});

test("createPoll sends the right action", async () => {
  const { client, calls } = fake();

  await client.createPoll({ chatId: "chatId-value", caption: "caption-value", options: ["options-one", "options-two"] });

  expectAction(calls, "create-poll", {
  "chatId": "chatId-value",
  "caption": "caption-value",
  "options": ["options-one", "options-two"],
  });
});

test("getPollVotes sends the right action", async () => {
  const { client, calls } = fake();

  await client.getPollVotes({ messageId: "messageId-value" });

  expectAction(calls, "get-poll-votes", {
  "messageId": "messageId-value",
  });
});

test("getStories sends the right action", async () => {
  const { client, calls } = fake();

  await client.getStories();

  expectAction(calls, "get-stories", {});
});

test("postStatus sends the right action", async () => {
  const { client, calls } = fake();

  await client.postStatus();

  expectAction(calls, "post-status", {});
});

test("setStatusPrivacy sends the right action", async () => {
  const { client, calls } = fake();

  await client.setStatusPrivacy({ type: "type-value" });

  expectAction(calls, "set-status-privacy", {
  "type": "type-value",
  });
});

test("getStatusPrivacy sends the right action", async () => {
  const { client, calls } = fake();

  await client.getStatusPrivacy();

  expectAction(calls, "get-status-privacy", {});
});

test("getProfilePicUrl sends the right action", async () => {
  const { client, calls } = fake();

  await client.getProfilePicUrl({ contactId: "contactId-value" });

  expectAction(calls, "get-profile-pic-url", {
  "contactId": "contactId-value",
  });
});

test("getContactById sends the right action", async () => {
  const { client, calls } = fake();

  await client.getContactById({ contactId: "contactId-value" });

  expectAction(calls, "get-contact-by-id", {
  "contactId": "contactId-value",
  });
});

test("getLid sends the right action", async () => {
  const { client, calls } = fake();

  await client.getLid({ contactIds: ["contactIds-one", "contactIds-two"] });

  expectAction(calls, "get-lid", {
  "contactIds": ["contactIds-one", "contactIds-two"],
  });
});

test("upsertContact sends the right action", async () => {
  const { client, calls } = fake();

  await client.upsertContact({ phoneNumber: "phoneNumber-value", firstName: "firstName-value", lastName: "lastName-value" });

  expectAction(calls, "upsert-contact", {
  "phoneNumber": "phoneNumber-value",
  "firstName": "firstName-value",
  "lastName": "lastName-value",
  });
});

test("deleteContact sends the right action", async () => {
  const { client, calls } = fake();

  await client.deleteContact({ phoneNumber: "phoneNumber-value" });

  expectAction(calls, "delete-contact", {
  "phoneNumber": "phoneNumber-value",
  });
});

test("blockContact sends the right action", async () => {
  const { client, calls } = fake();

  await client.blockContact({ contactId: "contactId-value" });

  expectAction(calls, "block-contact", {
  "contactId": "contactId-value",
  });
});

test("unblockContact sends the right action", async () => {
  const { client, calls } = fake();

  await client.unblockContact({ contactId: "contactId-value" });

  expectAction(calls, "unblock-contact", {
  "contactId": "contactId-value",
  });
});

test("getBlockedContacts sends the right action", async () => {
  const { client, calls } = fake();

  await client.getBlockedContacts();

  expectAction(calls, "get-blocked-contacts", {});
});

test("getCommonGroups sends the right action", async () => {
  const { client, calls } = fake();

  await client.getCommonGroups({ contactId: "contactId-value" });

  expectAction(calls, "get-common-groups", {
  "contactId": "contactId-value",
  });
});

test("getContactAboutInfo sends the right action", async () => {
  const { client, calls } = fake();

  await client.getContactAboutInfo({ contactId: "contactId-value" });

  expectAction(calls, "get-contact-about-info", {
  "contactId": "contactId-value",
  });
});

test("getChatById sends the right action", async () => {
  const { client, calls } = fake();

  await client.getChatById({ chatId: "chatId-value" });

  expectAction(calls, "get-chat-by-id", {
  "chatId": "chatId-value",
  });
});

test("deleteChatById sends the right action", async () => {
  const { client, calls } = fake();

  await client.deleteChatById({ chatId: "chatId-value" });

  expectAction(calls, "delete-chat-by-id", {
  "chatId": "chatId-value",
  });
});

test("createGroup sends the right action", async () => {
  const { client, calls } = fake();

  await client.createGroup({ groupName: "groupName-value", groupParticipants: ["groupParticipants-one", "groupParticipants-two"] });

  expectAction(calls, "create-group", {
  "groupName": "groupName-value",
  "groupParticipants": ["groupParticipants-one", "groupParticipants-two"],
  });
});

test("getGroupParticipants sends the right action", async () => {
  const { client, calls } = fake();

  await client.getGroupParticipants({ chatId: "chatId-value" });

  expectAction(calls, "get-group-participants", {
  "chatId": "chatId-value",
  });
});

test("getGroupInfo sends the right action", async () => {
  const { client, calls } = fake();

  await client.getGroupInfo({ chatId: "chatId-value" });

  expectAction(calls, "get-group-info", {
  "chatId": "chatId-value",
  });
});

test("getReactions sends the right action", async () => {
  const { client, calls } = fake();

  await client.getReactions();

  expectAction(calls, "get-reactions", {});
});

test("reactToMessage sends the right action", async () => {
  const { client, calls } = fake();

  await client.reactToMessage({ messageId: "messageId-value", reaction: "reaction-value" });

  expectAction(calls, "react-to-message", {
  "messageId": "messageId-value",
  "reaction": "reaction-value",
  });
});

test("updateGroupInfo sends the right action", async () => {
  const { client, calls } = fake();

  await client.updateGroupInfo({ chatId: "chatId-value" });

  expectAction(calls, "update-group-info", {
  "chatId": "chatId-value",
  });
});

test("getMessageMentions sends the right action", async () => {
  const { client, calls } = fake();

  await client.getMessageMentions({ messageId: "messageId-value" });

  expectAction(calls, "get-message-mentions", {
  "messageId": "messageId-value",
  });
});

test("pinMessage sends the right action", async () => {
  const { client, calls } = fake();

  await client.pinMessage({ messageId: "messageId-value" });

  expectAction(calls, "pin-message", {
  "messageId": "messageId-value",
  });
});

test("unpinMessage sends the right action", async () => {
  const { client, calls } = fake();

  await client.unpinMessage({ messageId: "messageId-value" });

  expectAction(calls, "unpin-message", {
  "messageId": "messageId-value",
  });
});

test("starMessage sends the right action", async () => {
  const { client, calls } = fake();

  await client.starMessage({ messageId: "messageId-value" });

  expectAction(calls, "star-message", {
  "messageId": "messageId-value",
  });
});

test("unstarMessage sends the right action", async () => {
  const { client, calls } = fake();

  await client.unstarMessage({ messageId: "messageId-value" });

  expectAction(calls, "unstar-message", {
  "messageId": "messageId-value",
  });
});

test("updateGroupSettings sends the right action", async () => {
  const { client, calls } = fake();

  await client.updateGroupSettings({ chatId: "chatId-value" });

  expectAction(calls, "update-group-settings", {
  "chatId": "chatId-value",
  });
});

test("addGroupParticipant sends the right action", async () => {
  const { client, calls } = fake();

  await client.addGroupParticipant({ chatId: "chatId-value", participant: "participant-value" });

  expectAction(calls, "add-group-participant", {
  "chatId": "chatId-value",
  "participant": "participant-value",
  });
});

test("removeGroupParticipant sends the right action", async () => {
  const { client, calls } = fake();

  await client.removeGroupParticipant({ chatId: "chatId-value", participant: "participant-value" });

  expectAction(calls, "remove-group-participant", {
  "chatId": "chatId-value",
  "participant": "participant-value",
  });
});

test("promoteGroupParticipant sends the right action", async () => {
  const { client, calls } = fake();

  await client.promoteGroupParticipant({ chatId: "chatId-value", participant: "participant-value" });

  expectAction(calls, "promote-group-participant", {
  "chatId": "chatId-value",
  "participant": "participant-value",
  });
});

test("demoteGroupParticipant sends the right action", async () => {
  const { client, calls } = fake();

  await client.demoteGroupParticipant({ chatId: "chatId-value", participant: "participant-value" });

  expectAction(calls, "demote-group-participant", {
  "chatId": "chatId-value",
  "participant": "participant-value",
  });
});

test("acceptGroupMemberRequests sends the right action", async () => {
  const { client, calls } = fake();

  await client.acceptGroupMemberRequests({ chatId: "chatId-value" });

  expectAction(calls, "accept-group-member-requests", {
  "chatId": "chatId-value",
  });
});

test("denyGroupMemberRequests sends the right action", async () => {
  const { client, calls } = fake();

  await client.denyGroupMemberRequests({ chatId: "chatId-value" });

  expectAction(calls, "deny-group-member-requests", {
  "chatId": "chatId-value",
  });
});

test("getGroupMemberRequests sends the right action", async () => {
  const { client, calls } = fake();

  await client.getGroupMemberRequests({ chatId: "chatId-value" });

  expectAction(calls, "get-group-member-requests", {
  "chatId": "chatId-value",
  });
});

test("acceptInvite sends the right action", async () => {
  const { client, calls } = fake();

  await client.acceptInvite({ inviteCode: "inviteCode-value" });

  expectAction(calls, "accept-invite", {
  "inviteCode": "inviteCode-value",
  });
});

test("acceptGroupInvite sends the right action", async () => {
  const { client, calls } = fake();

  await client.acceptGroupInvite();

  expectAction(calls, "accept-group-invite", {});
});

test("getInviteInfo sends the right action", async () => {
  const { client, calls } = fake();

  await client.getInviteInfo({ inviteCode: "inviteCode-value" });

  expectAction(calls, "get-invite-info", {
  "inviteCode": "inviteCode-value",
  });
});

test("createChannel sends the right action", async () => {
  const { client, calls } = fake();

  await client.createChannel({ name: "name-value" });

  expectAction(calls, "create-channel", {
  "name": "name-value",
  });
});

test("getChannels sends the right action", async () => {
  const { client, calls } = fake();

  await client.getChannels();

  expectAction(calls, "get-channels", {});
});

test("getChannelById sends the right action", async () => {
  const { client, calls } = fake();

  await client.getChannelById();

  expectAction(calls, "get-channel-by-id", {});
});

test("subscribeToChannel sends the right action", async () => {
  const { client, calls } = fake();

  await client.subscribeToChannel();

  expectAction(calls, "subscribe-to-channel", {});
});

test("unsubscribeFromChannel sends the right action", async () => {
  const { client, calls } = fake();

  await client.unsubscribeFromChannel();

  expectAction(calls, "unsubscribe-from-channel", {});
});

test("searchChannels sends the right action", async () => {
  const { client, calls } = fake();

  await client.searchChannels();

  expectAction(calls, "search-channels", {});
});

test("createCommunity sends the right action", async () => {
  const { client, calls } = fake();

  await client.createCommunity({ title: "title-value" });

  expectAction(calls, "create-community", {
  "title": "title-value",
  });
});

test("getCommunities sends the right action", async () => {
  const { client, calls } = fake();

  await client.getCommunities();

  expectAction(calls, "get-communities", {});
});

test("getCommunityById sends the right action", async () => {
  const { client, calls } = fake();

  await client.getCommunityById({ communityId: "communityId-value" });

  expectAction(calls, "get-community-by-id", {
  "communityId": "communityId-value",
  });
});

test("getCommunitySubgroups sends the right action", async () => {
  const { client, calls } = fake();

  await client.getCommunitySubgroups({ communityId: "communityId-value" });

  expectAction(calls, "get-community-subgroups", {
  "communityId": "communityId-value",
  });
});

test("sendCommunityAnnouncement sends the right action", async () => {
  const { client, calls } = fake();

  await client.sendCommunityAnnouncement({ communityId: "communityId-value" });

  expectAction(calls, "send-community-announcement", {
  "communityId": "communityId-value",
  });
});

test("linkCommunitySubgroup sends the right action", async () => {
  const { client, calls } = fake();

  await client.linkCommunitySubgroup({ communityId: "communityId-value", groupIds: ["groupIds-one", "groupIds-two"] });

  expectAction(calls, "link-community-subgroup", {
  "communityId": "communityId-value",
  "groupIds": ["groupIds-one", "groupIds-two"],
  });
});

test("unlinkCommunitySubgroup sends the right action", async () => {
  const { client, calls } = fake();

  await client.unlinkCommunitySubgroup({ communityId: "communityId-value", groupIds: ["groupIds-one", "groupIds-two"] });

  expectAction(calls, "unlink-community-subgroup", {
  "communityId": "communityId-value",
  "groupIds": ["groupIds-one", "groupIds-two"],
  });
});

test("leaveCommunity sends the right action", async () => {
  const { client, calls } = fake();

  await client.leaveCommunity({ communityId: "communityId-value" });

  expectAction(calls, "leave-community", {
  "communityId": "communityId-value",
  });
});

test("archiveChat sends the right action", async () => {
  const { client, calls } = fake();

  await client.archiveChat({ chatId: "chatId-value" });

  expectAction(calls, "archive-chat", {
  "chatId": "chatId-value",
  });
});

test("unarchiveChat sends the right action", async () => {
  const { client, calls } = fake();

  await client.unarchiveChat({ chatId: "chatId-value" });

  expectAction(calls, "unarchive-chat", {
  "chatId": "chatId-value",
  });
});

test("getLabels sends the right action", async () => {
  const { client, calls } = fake();

  await client.getLabels();

  expectAction(calls, "get-labels", {});
});

test("getLabelById sends the right action", async () => {
  const { client, calls } = fake();

  await client.getLabelById({ labelId: 42 });

  expectAction(calls, "get-label-by-id", {
  "labelId": 42,
  });
});

test("getChatLabels sends the right action", async () => {
  const { client, calls } = fake();

  await client.getChatLabels({ chatId: "chatId-value" });

  expectAction(calls, "get-chat-labels", {
  "chatId": "chatId-value",
  });
});

test("getChatsByLabelId sends the right action", async () => {
  const { client, calls } = fake();

  await client.getChatsByLabelId({ labelId: 42 });

  expectAction(calls, "get-chats-by-label-id", {
  "labelId": 42,
  });
});

test("changeChatLabels sends the right action", async () => {
  const { client, calls } = fake();

  await client.changeChatLabels({ chatId: "chatId-value", labelIds: ["labelIds-one", "labelIds-two"] });

  expectAction(calls, "change-chat-labels", {
  "chatId": "chatId-value",
  "labelIds": ["labelIds-one", "labelIds-two"],
  });
});

test("logout sends the right action", async () => {
  const { client, calls } = fake();

  await client.logout();

  expectAction(calls, "logout", {});
});

test("reboot sends the right action", async () => {
  const { client, calls } = fake();

  await client.reboot();

  expectAction(calls, "reboot", {});
});

test("sendPresenceAvailable sends the right action", async () => {
  const { client, calls } = fake();

  await client.sendPresenceAvailable();

  expectAction(calls, "send-presence-available", {});
});

test("setStatus sends the right action", async () => {
  const { client, calls } = fake();

  await client.setStatus({ status: "status-value" });

  expectAction(calls, "set-status", {
  "status": "status-value",
  });
});

test("setDisplayName sends the right action", async () => {
  const { client, calls } = fake();

  await client.setDisplayName({ displayName: "displayName-value" });

  expectAction(calls, "set-display-name", {
  "displayName": "displayName-value",
  });
});

test("requestPairingCode sends the right action", async () => {
  const { client, calls } = fake();

  await client.requestPairingCode({ phoneNumber: "phoneNumber-value" });

  expectAction(calls, "request-pairing-code", {
  "phoneNumber": "phoneNumber-value",
  });
});

test("sendTyping sends the right action", async () => {
  const { client, calls } = fake();

  await client.sendTyping({ chatId: "chatId-value" });

  expectAction(calls, "send-typing", {
  "chatId": "chatId-value",
  });
});

test("clearChatMessages sends the right action", async () => {
  const { client, calls } = fake();

  await client.clearChatMessages({ chatId: "chatId-value" });

  expectAction(calls, "clear-chat-messages", {
  "chatId": "chatId-value",
  });
});

test("syncChatHistory sends the right action", async () => {
  const { client, calls } = fake();

  await client.syncChatHistory({ chatId: "chatId-value" });

  expectAction(calls, "sync-chat-history", {
  "chatId": "chatId-value",
  });
});

test("sendStopTyping sends the right action", async () => {
  const { client, calls } = fake();

  await client.sendStopTyping();

  expectAction(calls, "send-stop-typing", {});
});

test("sendPresenceUnavailable sends the right action", async () => {
  const { client, calls } = fake();

  await client.sendPresenceUnavailable();

  expectAction(calls, "send-presence-unavailable", {});
});

test("getChatPresence sends the right action", async () => {
  const { client, calls } = fake();

  await client.getChatPresence({ chatId: "chatId-value" });

  expectAction(calls, "get-chat-presence", {
  "chatId": "chatId-value",
  });
});

test("getChatPresenceSnapshot sends the right action", async () => {
  const { client, calls } = fake();

  await client.getChatPresenceSnapshot({ chatId: "chatId-value" });

  expectAction(calls, "get-chat-presence-snapshot", {
  "chatId": "chatId-value",
  });
});

test("sendEvent sends the right action", async () => {
  const { client, calls } = fake();

  await client.sendEvent({ chatId: "chatId-value", name: "name-value", startTime: 42 });

  expectAction(calls, "send-event", {
  "chatId": "chatId-value",
  "name": "name-value",
  "startTime": 42,
  });
});

test("voteOnPoll sends the right action", async () => {
  const { client, calls } = fake();

  await client.voteOnPoll({ messageId: "messageId-value", selectedOptions: ["selectedOptions-one", "selectedOptions-two"] });

  expectAction(calls, "vote-on-poll", {
  "messageId": "messageId-value",
  "selectedOptions": ["selectedOptions-one", "selectedOptions-two"],
  });
});

test("editScheduledEvent sends the right action", async () => {
  const { client, calls } = fake();

  await client.editScheduledEvent({ messageId: "messageId-value" });

  expectAction(calls, "edit-scheduled-event", {
  "messageId": "messageId-value",
  });
});

test("getPinnedMessages sends the right action", async () => {
  const { client, calls } = fake();

  await client.getPinnedMessages({ chatId: "chatId-value" });

  expectAction(calls, "get-pinned-messages", {
  "chatId": "chatId-value",
  });
});

test("setDeviceName sends the right action", async () => {
  const { client, calls } = fake();

  await client.setDeviceName();

  expectAction(calls, "set-device-name", {});
});

test("createCallLink sends the right action", async () => {
  const { client, calls } = fake();

  await client.createCallLink({ startTime: 42, callType: "callType-value" });

  expectAction(calls, "create-call-link", {
  "startTime": 42,
  "callType": "callType-value",
  });
});

test("sendEventResponse sends the right action", async () => {
  const { client, calls } = fake();

  await client.sendEventResponse({ eventResponse: 42, eventMessageId: "eventMessageId-value" });

  expectAction(calls, "send-event-response", {
  "eventResponse": 42,
  "eventMessageId": "eventMessageId-value",
  });
});

test("revokeStatusMessage sends the right action", async () => {
  const { client, calls } = fake();

  await client.revokeStatusMessage({ messageId: "messageId-value" });

  expectAction(calls, "revoke-status-message", {
  "messageId": "messageId-value",
  });
});

test("addCustomerNote sends the right action", async () => {
  const { client, calls } = fake();

  await client.addCustomerNote({ chatId: "chatId-value", note: "note-value" });

  expectAction(calls, "add-customer-note", {
  "chatId": "chatId-value",
  "note": "note-value",
  });
});

test("getCustomerNote sends the right action", async () => {
  const { client, calls } = fake();

  await client.getCustomerNote({ chatId: "chatId-value" });

  expectAction(calls, "get-customer-note", {
  "chatId": "chatId-value",
  });
});

test("getBroadcast sends the right action", async () => {
  const { client, calls } = fake();

  await client.getBroadcast({ contactId: "contactId-value" });

  expectAction(calls, "get-broadcast", {
  "contactId": "contactId-value",
  });
});

test("revokeStatus sends the right action", async () => {
  const { client, calls } = fake();

  await client.revokeStatus({ messageId: "messageId-value" });

  expectAction(calls, "revoke-status", {
  "messageId": "messageId-value",
  });
});

test("getPrivacySettings sends the right action", async () => {
  const { client, calls } = fake();

  await client.getPrivacySettings();

  expectAction(calls, "get-privacy-settings", {});
});

test("setPrivacySetting sends the right action", async () => {
  const { client, calls } = fake();

  await client.setPrivacySetting({ category: "category-value", value: "value-value" });

  expectAction(calls, "set-privacy-setting", {
  "category": "category-value",
  "value": "value-value",
  });
});

test("getDisappearingMessages sends the right action", async () => {
  const { client, calls } = fake();

  await client.getDisappearingMessages({ chatId: "chatId-value" });

  expectAction(calls, "get-disappearing-messages", {
  "chatId": "chatId-value",
  });
});

test("setDisappearingMessages sends the right action", async () => {
  const { client, calls } = fake();

  await client.setDisappearingMessages({ chatId: "chatId-value", duration: 42 });

  expectAction(calls, "set-disappearing-messages", {
  "chatId": "chatId-value",
  "duration": 42,
  });
});

test("getDisappearingDurations sends the right action", async () => {
  const { client, calls } = fake();

  await client.getDisappearingDurations();

  expectAction(calls, "get-disappearing-durations", {});
});

test("getBusinessProfile sends the right action", async () => {
  const { client, calls } = fake();

  await client.getBusinessProfile();

  expectAction(calls, "get-business-profile", {});
});

test("getBusinessCategories sends the right action", async () => {
  const { client, calls } = fake();

  await client.getBusinessCategories();

  expectAction(calls, "get-business-categories", {});
});

test("setBusinessProfile sends the right action", async () => {
  const { client, calls } = fake();

  await client.setBusinessProfile();

  expectAction(calls, "set-business-profile", {});
});

test("getQuickReplies sends the right action", async () => {
  const { client, calls } = fake();

  await client.getQuickReplies();

  expectAction(calls, "get-quick-replies", {});
});

test("createQuickReply sends the right action", async () => {
  const { client, calls } = fake();

  await client.createQuickReply({ shortcut: "shortcut-value", message: "message-value" });

  expectAction(calls, "create-quick-reply", {
  "shortcut": "shortcut-value",
  "message": "message-value",
  });
});

test("updateQuickReply sends the right action", async () => {
  const { client, calls } = fake();

  await client.updateQuickReply({ id: "id-value" });

  expectAction(calls, "update-quick-reply", {
  "id": "id-value",
  });
});

test("deleteQuickReply sends the right action", async () => {
  const { client, calls } = fake();

  await client.deleteQuickReply({ id: "id-value" });

  expectAction(calls, "delete-quick-reply", {
  "id": "id-value",
  });
});
