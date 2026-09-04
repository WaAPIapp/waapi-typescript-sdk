/**
 * Client actions generated from the WaAPI OpenAPI specification.
 *
 * DO NOT EDIT. Regenerate with:
 *
 *     node scripts/sync-actions.mjs ../eazewhatsapp-proxy
 *
 * Hand-written methods belong in client.ts, which extends this class.
 */

export interface SendMessageOptions {
  chatId: string;
  message: string;
  mentions?: unknown[];
  replyToMessageId?: string;
  previewLink?: boolean;
  firedandforget?: boolean;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface SendMediaOptions {
  chatId: string;
  mediaUrl?: string;
  mediaBase64?: string;
  mediaCaption?: string;
  mediaName?: string;
  replyToMessageId?: string;
  previewLink?: boolean;
  asSticker?: boolean;
  asVoice?: boolean;
  asDocument?: boolean;
  firedandforget?: boolean;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface SendSeenOptions {
  chatId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface SendVcardOptions {
  chatId: string;
  vCard: Record<string, unknown>;
  firedandforget?: boolean;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface SendLocationOptions {
  chatId: string;
  latitude: number;
  longitude: number;
  options?: Record<string, unknown>;
  firedandforget?: boolean;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetChatsOptions {
  offset?: number;
  limit?: number;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface MarkChatUnreadOptions {
  chatId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface MuteChatOptions {
  chatId: string;
  unmuteDate?: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface UnmuteChatOptions {
  chatId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface PinChatOptions {
  chatId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface UnpinChatOptions {
  chatId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface FetchMessagesOptions {
  chatId: string;
  limit?: number;
  offset?: number;
  fromMe?: boolean;
  includeMedia?: boolean;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetMessageByIdOptions {
  messageId: string;
  includeMedia?: boolean;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface DownloadMediaOptions {
  messageId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetMessageInfoByIdOptions {
  messageId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface DeleteMessageByIdOptions {
  messageId: string;
  forEveryone?: boolean;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface EditMessageOptions {
  messageId: string;
  message: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface ForwardMessageOptions {
  messageId: string;
  chatId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface SearchMessagesOptions {
  query: string;
  options?: Record<string, unknown>;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetContactsOptions {
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetNumberIdOptions {
  number: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetCountryCodeOptions {
  number: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetFormattedNumberOptions {
  number: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface IsRegisteredUserOptions {
  contactId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface CreatePollOptions {
  chatId: string;
  caption: string;
  options: unknown[];
  multipleAnswers?: boolean;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetPollVotesOptions {
  messageId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetStoriesOptions {
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface PostStatusOptions {
  content?: string;
  mediaUrl?: string;
  mediaCaption?: string;
  mediaName?: string;
  backgroundColor?: number;
  fontStyle?: number;
  sendVideoAsGif?: boolean;
  sendAudioAsVoice?: boolean;
  audience?: Record<string, unknown>;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface SetStatusPrivacyOptions {
  type: string;
  contacts?: unknown[];
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetStatusPrivacyOptions {
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetProfilePicUrlOptions {
  contactId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetContactByIdOptions {
  contactId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetLidOptions {
  contactIds: unknown[];
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface UpsertContactOptions {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  syncToAddressbook?: boolean;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface DeleteContactOptions {
  phoneNumber: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface BlockContactOptions {
  contactId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface UnblockContactOptions {
  contactId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetBlockedContactsOptions {
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetCommonGroupsOptions {
  contactId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetContactAboutInfoOptions {
  contactId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetChatByIdOptions {
  chatId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface DeleteChatByIdOptions {
  chatId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface CreateGroupOptions {
  groupName: string;
  groupParticipants: unknown[];
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetGroupParticipantsOptions {
  chatId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetGroupInfoOptions {
  chatId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetReactionsOptions {
  messageId?: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface ReactToMessageOptions {
  messageId: string;
  reaction: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface UpdateGroupInfoOptions {
  chatId: string;
  subject?: string;
  description?: string;
  pictureUrl?: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetMessageMentionsOptions {
  messageId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface PinMessageOptions {
  messageId: string;
  duration?: number;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface UnpinMessageOptions {
  messageId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface StarMessageOptions {
  messageId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface UnstarMessageOptions {
  messageId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface UpdateGroupSettingsOptions {
  chatId: string;
  messageAdminOnly?: boolean;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface AddGroupParticipantOptions {
  chatId: string;
  participant: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface RemoveGroupParticipantOptions {
  chatId: string;
  participant: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface PromoteGroupParticipantOptions {
  chatId: string;
  participant: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface DemoteGroupParticipantOptions {
  chatId: string;
  participant: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface AcceptGroupMemberRequestsOptions {
  chatId: string;
  requesterIds?: string | unknown[];
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface DenyGroupMemberRequestsOptions {
  chatId: string;
  requesterIds?: string | unknown[];
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetGroupMemberRequestsOptions {
  chatId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface AcceptInviteOptions {
  inviteCode: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface AcceptGroupInviteOptions {
  inviteCode?: string;
  inviteData?: Record<string, unknown>;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetInviteInfoOptions {
  inviteCode: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface CreateChannelOptions {
  name: string;
  description?: string;
  pictureUrl?: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetChannelsOptions {
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetChannelByIdOptions {
  channelId?: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface SubscribeToChannelOptions {
  channelId?: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface UnsubscribeFromChannelOptions {
  channelId?: string;
  deleteChannelData?: boolean;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface SearchChannelsOptions {
  countryCodes?: unknown[];
  searchText?: string;
  view?: string;
  limit?: number;
  skipSubscribedNewsletters?: boolean;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface CreateCommunityOptions {
  title: string;
  description?: string;
  closed?: boolean;
  allowNonAdminSubGroupCreation?: boolean;
  createGeneralChat?: boolean;
  existingGroupIds?: unknown[];
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetCommunitiesOptions {
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetCommunityByIdOptions {
  communityId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetCommunitySubgroupsOptions {
  communityId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface SendCommunityAnnouncementOptions {
  communityId: string;
  target?: string;
  message?: string;
  mediaUrl?: string;
  mediaCaption?: string;
  mediaName?: string;
  previewLink?: boolean;
  asSticker?: boolean;
  asVoice?: boolean;
  asDocument?: boolean;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface LinkCommunitySubgroupOptions {
  communityId: string;
  groupIds: unknown[];
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface UnlinkCommunitySubgroupOptions {
  communityId: string;
  groupIds: unknown[];
  removeOrphanMembers?: boolean;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface LeaveCommunityOptions {
  communityId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface ArchiveChatOptions {
  chatId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface UnarchiveChatOptions {
  chatId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetLabelsOptions {
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetLabelByIdOptions {
  labelId: number;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetChatLabelsOptions {
  chatId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetChatsByLabelIdOptions {
  labelId: number;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface ChangeChatLabelsOptions {
  chatId: string;
  labelIds: unknown[];
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface LogoutOptions {
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface RebootOptions {
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface SendPresenceAvailableOptions {
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface SetStatusOptions {
  status: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface SetDisplayNameOptions {
  displayName: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface RequestPairingCodeOptions {
  phoneNumber: string;
  showNotification?: boolean;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface SendTypingOptions {
  chatId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface ClearChatMessagesOptions {
  chatId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface SyncChatHistoryOptions {
  chatId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface SendStopTypingOptions {
  chatId?: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface SendPresenceUnavailableOptions {
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetChatPresenceOptions {
  chatId: string;
  waitForData?: boolean;
  timeoutMs?: number;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetChatPresenceSnapshotOptions {
  chatId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface SendEventOptions {
  chatId: string;
  name: string;
  startTime: number | string;
  description?: string;
  endTime?: number | string;
  location?: string;
  callType?: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface VoteOnPollOptions {
  messageId: string;
  selectedOptions: unknown[];
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface EditScheduledEventOptions {
  messageId: string;
  name?: string;
  startTimeTs?: number;
  eventSendOptions?: Record<string, unknown>;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetPinnedMessagesOptions {
  chatId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface SetDeviceNameOptions {
  deviceName?: string;
  browserName?: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface CreateCallLinkOptions {
  startTime: number | string;
  callType: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface SendEventResponseOptions {
  eventResponse: number;
  eventMessageId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface RevokeStatusMessageOptions {
  messageId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface AddCustomerNoteOptions {
  chatId: string;
  note: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetCustomerNoteOptions {
  chatId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetBroadcastOptions {
  contactId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface RevokeStatusOptions {
  messageId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetPrivacySettingsOptions {
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface SetPrivacySettingOptions {
  category: string;
  value: string;
  disallowedList?: unknown[];
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetDisappearingMessagesOptions {
  chatId: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface SetDisappearingMessagesOptions {
  chatId: string;
  duration: number;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetDisappearingDurationsOptions {
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetBusinessProfileOptions {
  userId?: string;
  withCompliance?: boolean;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetBusinessCategoriesOptions {
  parentId?: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface SetBusinessProfileOptions {
  description?: string;
  email?: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  website?: unknown[];
  categories?: unknown[];
  businessHours?: Record<string, unknown>;
  priceTier?: string;
  serviceAreas?: unknown[];
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface GetQuickRepliesOptions {
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface CreateQuickReplyOptions {
  shortcut: string;
  message: string;
  keywords?: unknown[];
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface UpdateQuickReplyOptions {
  id: string;
  shortcut?: string;
  message?: string;
  keywords?: unknown[];
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

export interface DeleteQuickReplyOptions {
  id: string;
  /** Overrides the instance configured on the client. */
  instanceId?: number | string;
}

/** Every client action. `WaAPI` extends this. */
export abstract class GeneratedActions {
  /** Implemented by the client. */
  abstract action(
    name: string,
    payload?: Record<string, unknown>,
    instanceId?: number | string,
  ): Promise<any>;

  /** send a text message to a chat */
  async sendMessage(options: SendMessageOptions): Promise<any> {
    return this.action(
      "send-message",
      {
        chatId: options.chatId,
        message: options.message,
        mentions: options.mentions,
        replyToMessageId: options.replyToMessageId,
        previewLink: options.previewLink,
        firedandforget: options.firedandforget,
      },
      options.instanceId,
    );
  }

  /** send a media message (image, video, audio, document) */
  async sendMedia(options: SendMediaOptions): Promise<any> {
    return this.action(
      "send-media",
      {
        chatId: options.chatId,
        mediaUrl: options.mediaUrl,
        mediaBase64: options.mediaBase64,
        mediaCaption: options.mediaCaption,
        mediaName: options.mediaName,
        replyToMessageId: options.replyToMessageId,
        previewLink: options.previewLink,
        asSticker: options.asSticker,
        asVoice: options.asVoice,
        asDocument: options.asDocument,
        firedandforget: options.firedandforget,
      },
      options.instanceId,
    );
  }

  /** mark chat messages as seen (blue ticks) */
  async sendSeen(options: SendSeenOptions): Promise<any> {
    return this.action(
      "send-seen",
      {
        chatId: options.chatId,
      },
      options.instanceId,
    );
  }

  /** send vCard */
  async sendVcard(options: SendVcardOptions): Promise<any> {
    return this.action(
      "send-vcard",
      {
        chatId: options.chatId,
        vCard: options.vCard,
        firedandforget: options.firedandforget,
      },
      options.instanceId,
    );
  }

  /** send location */
  async sendLocation(options: SendLocationOptions): Promise<any> {
    return this.action(
      "send-location",
      {
        chatId: options.chatId,
        latitude: options.latitude,
        longitude: options.longitude,
        options: options.options,
        firedandforget: options.firedandforget,
      },
      options.instanceId,
    );
  }

  /** get all chats */
  async getChats(options: GetChatsOptions = {}): Promise<any> {
    return this.action(
      "get-chats",
      {
        offset: options.offset,
        limit: options.limit,
      },
      options.instanceId,
    );
  }

  /** mark chat as unread */
  async markChatUnread(options: MarkChatUnreadOptions): Promise<any> {
    return this.action(
      "mark-chat-unread",
      {
        chatId: options.chatId,
      },
      options.instanceId,
    );
  }

  /** mute chat */
  async muteChat(options: MuteChatOptions): Promise<any> {
    return this.action(
      "mute-chat",
      {
        chatId: options.chatId,
        unmuteDate: options.unmuteDate,
      },
      options.instanceId,
    );
  }

  /** unmute chat */
  async unmuteChat(options: UnmuteChatOptions): Promise<any> {
    return this.action(
      "unmute-chat",
      {
        chatId: options.chatId,
      },
      options.instanceId,
    );
  }

  /** pin chat */
  async pinChat(options: PinChatOptions): Promise<any> {
    return this.action(
      "pin-chat",
      {
        chatId: options.chatId,
      },
      options.instanceId,
    );
  }

  /** unpin chat */
  async unpinChat(options: UnpinChatOptions): Promise<any> {
    return this.action(
      "unpin-chat",
      {
        chatId: options.chatId,
      },
      options.instanceId,
    );
  }

  /** fetch messages from a chat */
  async fetchMessages(options: FetchMessagesOptions): Promise<any> {
    return this.action(
      "fetch-messages",
      {
        chatId: options.chatId,
        limit: options.limit,
        offset: options.offset,
        fromMe: options.fromMe,
        includeMedia: options.includeMedia,
      },
      options.instanceId,
    );
  }

  /** get message by ID */
  async getMessageById(options: GetMessageByIdOptions): Promise<any> {
    return this.action(
      "get-message-by-id",
      {
        messageId: options.messageId,
        includeMedia: options.includeMedia,
      },
      options.instanceId,
    );
  }

  /** download media from message */
  async downloadMedia(options: DownloadMediaOptions): Promise<any> {
    return this.action(
      "download-media",
      {
        messageId: options.messageId,
      },
      options.instanceId,
    );
  }

  /** get message info by id */
  async getMessageInfoById(options: GetMessageInfoByIdOptions): Promise<any> {
    return this.action(
      "get-message-info-by-id",
      {
        messageId: options.messageId,
      },
      options.instanceId,
    );
  }

  /** delete message by id */
  async deleteMessageById(options: DeleteMessageByIdOptions): Promise<any> {
    return this.action(
      "delete-message-by-id",
      {
        messageId: options.messageId,
        forEveryone: options.forEveryone,
      },
      options.instanceId,
    );
  }

  /** edit a message */
  async editMessage(options: EditMessageOptions): Promise<any> {
    return this.action(
      "edit-message",
      {
        messageId: options.messageId,
        message: options.message,
      },
      options.instanceId,
    );
  }

  /** forward a message */
  async forwardMessage(options: ForwardMessageOptions): Promise<any> {
    return this.action(
      "forward-message",
      {
        messageId: options.messageId,
        chatId: options.chatId,
      },
      options.instanceId,
    );
  }

  /** search messages */
  async searchMessages(options: SearchMessagesOptions): Promise<any> {
    return this.action(
      "search-messages",
      {
        query: options.query,
        options: options.options,
      },
      options.instanceId,
    );
  }

  /** get all contacts */
  async getContacts(options: GetContactsOptions = {}): Promise<any> {
    return this.action(
      "get-contacts",
      {},
      options.instanceId,
    );
  }

  /** get chat ID from phone number */
  async getNumberId(options: GetNumberIdOptions): Promise<any> {
    return this.action(
      "get-number-id",
      {
        number: options.number,
      },
      options.instanceId,
    );
  }

  /** get country code */
  async getCountryCode(options: GetCountryCodeOptions): Promise<any> {
    return this.action(
      "get-country-code",
      {
        number: options.number,
      },
      options.instanceId,
    );
  }

  /** get formatted number */
  async getFormattedNumber(options: GetFormattedNumberOptions): Promise<any> {
    return this.action(
      "get-formatted-number",
      {
        number: options.number,
      },
      options.instanceId,
    );
  }

  /** is registered user */
  async isRegisteredUser(options: IsRegisteredUserOptions): Promise<any> {
    return this.action(
      "is-registered-user",
      {
        contactId: options.contactId,
      },
      options.instanceId,
    );
  }

  /** create poll message */
  async createPoll(options: CreatePollOptions): Promise<any> {
    return this.action(
      "create-poll",
      {
        chatId: options.chatId,
        caption: options.caption,
        options: options.options,
        multipleAnswers: options.multipleAnswers,
      },
      options.instanceId,
    );
  }

  /** get poll votes */
  async getPollVotes(options: GetPollVotesOptions): Promise<any> {
    return this.action(
      "get-poll-votes",
      {
        messageId: options.messageId,
      },
      options.instanceId,
    );
  }

  /** [BETA] get stories */
  async getStories(options: GetStoriesOptions = {}): Promise<any> {
    return this.action(
      "get-stories",
      {},
      options.instanceId,
    );
  }

  /** [BETA] post a text or media status/story */
  async postStatus(options: PostStatusOptions = {}): Promise<any> {
    return this.action(
      "post-status",
      {
        content: options.content,
        mediaUrl: options.mediaUrl,
        mediaCaption: options.mediaCaption,
        mediaName: options.mediaName,
        backgroundColor: options.backgroundColor,
        fontStyle: options.fontStyle,
        sendVideoAsGif: options.sendVideoAsGif,
        sendAudioAsVoice: options.sendAudioAsVoice,
        audience: options.audience,
      },
      options.instanceId,
    );
  }

  /** [BETA] set the Status privacy */
  async setStatusPrivacy(options: SetStatusPrivacyOptions): Promise<any> {
    return this.action(
      "set-status-privacy",
      {
        type: options.type,
        contacts: options.contacts,
      },
      options.instanceId,
    );
  }

  /** [BETA] get the current Status privacy */
  async getStatusPrivacy(options: GetStatusPrivacyOptions = {}): Promise<any> {
    return this.action(
      "get-status-privacy",
      {},
      options.instanceId,
    );
  }

  /** get profile picture URL */
  async getProfilePicUrl(options: GetProfilePicUrlOptions): Promise<any> {
    return this.action(
      "get-profile-pic-url",
      {
        contactId: options.contactId,
      },
      options.instanceId,
    );
  }

  /** get contact details by ID */
  async getContactById(options: GetContactByIdOptions): Promise<any> {
    return this.action(
      "get-contact-by-id",
      {
        contactId: options.contactId,
      },
      options.instanceId,
    );
  }

  /** get contact LID and phone */
  async getLid(options: GetLidOptions): Promise<any> {
    return this.action(
      "get-lid",
      {
        contactIds: options.contactIds,
      },
      options.instanceId,
    );
  }

  /** [BETA] add and update contact */
  async upsertContact(options: UpsertContactOptions): Promise<any> {
    return this.action(
      "upsert-contact",
      {
        phoneNumber: options.phoneNumber,
        firstName: options.firstName,
        lastName: options.lastName,
        syncToAddressbook: options.syncToAddressbook,
      },
      options.instanceId,
    );
  }

  /** delete contact */
  async deleteContact(options: DeleteContactOptions): Promise<any> {
    return this.action(
      "delete-contact",
      {
        phoneNumber: options.phoneNumber,
      },
      options.instanceId,
    );
  }

  /** block a contact */
  async blockContact(options: BlockContactOptions): Promise<any> {
    return this.action(
      "block-contact",
      {
        contactId: options.contactId,
      },
      options.instanceId,
    );
  }

  /** unblock a contact */
  async unblockContact(options: UnblockContactOptions): Promise<any> {
    return this.action(
      "unblock-contact",
      {
        contactId: options.contactId,
      },
      options.instanceId,
    );
  }

  /** get blocked contacts */
  async getBlockedContacts(options: GetBlockedContactsOptions = {}): Promise<any> {
    return this.action(
      "get-blocked-contacts",
      {},
      options.instanceId,
    );
  }

  /** get common groups with contact */
  async getCommonGroups(options: GetCommonGroupsOptions): Promise<any> {
    return this.action(
      "get-common-groups",
      {
        contactId: options.contactId,
      },
      options.instanceId,
    );
  }

  /** get contact about info */
  async getContactAboutInfo(options: GetContactAboutInfoOptions): Promise<any> {
    return this.action(
      "get-contact-about-info",
      {
        contactId: options.contactId,
      },
      options.instanceId,
    );
  }

  /** get chat by id */
  async getChatById(options: GetChatByIdOptions): Promise<any> {
    return this.action(
      "get-chat-by-id",
      {
        chatId: options.chatId,
      },
      options.instanceId,
    );
  }

  /** delete chat by id */
  async deleteChatById(options: DeleteChatByIdOptions): Promise<any> {
    return this.action(
      "delete-chat-by-id",
      {
        chatId: options.chatId,
      },
      options.instanceId,
    );
  }

  /** create group */
  async createGroup(options: CreateGroupOptions): Promise<any> {
    return this.action(
      "create-group",
      {
        groupName: options.groupName,
        groupParticipants: options.groupParticipants,
      },
      options.instanceId,
    );
  }

  /** get group participants */
  async getGroupParticipants(options: GetGroupParticipantsOptions): Promise<any> {
    return this.action(
      "get-group-participants",
      {
        chatId: options.chatId,
      },
      options.instanceId,
    );
  }

  /** get group info */
  async getGroupInfo(options: GetGroupInfoOptions): Promise<any> {
    return this.action(
      "get-group-info",
      {
        chatId: options.chatId,
      },
      options.instanceId,
    );
  }

  /** get message reactions */
  async getReactions(options: GetReactionsOptions = {}): Promise<any> {
    return this.action(
      "get-reactions",
      {
        messageId: options.messageId,
      },
      options.instanceId,
    );
  }

  /** react to message */
  async reactToMessage(options: ReactToMessageOptions): Promise<any> {
    return this.action(
      "react-to-message",
      {
        messageId: options.messageId,
        reaction: options.reaction,
      },
      options.instanceId,
    );
  }

  /** update group info */
  async updateGroupInfo(options: UpdateGroupInfoOptions): Promise<any> {
    return this.action(
      "update-group-info",
      {
        chatId: options.chatId,
        subject: options.subject,
        description: options.description,
        pictureUrl: options.pictureUrl,
      },
      options.instanceId,
    );
  }

  /** get message mentions */
  async getMessageMentions(options: GetMessageMentionsOptions): Promise<any> {
    return this.action(
      "get-message-mentions",
      {
        messageId: options.messageId,
      },
      options.instanceId,
    );
  }

  /** pin message */
  async pinMessage(options: PinMessageOptions): Promise<any> {
    return this.action(
      "pin-message",
      {
        messageId: options.messageId,
        duration: options.duration,
      },
      options.instanceId,
    );
  }

  /** unpin message */
  async unpinMessage(options: UnpinMessageOptions): Promise<any> {
    return this.action(
      "unpin-message",
      {
        messageId: options.messageId,
      },
      options.instanceId,
    );
  }

  /** star message */
  async starMessage(options: StarMessageOptions): Promise<any> {
    return this.action(
      "star-message",
      {
        messageId: options.messageId,
      },
      options.instanceId,
    );
  }

  /** unstar message */
  async unstarMessage(options: UnstarMessageOptions): Promise<any> {
    return this.action(
      "unstar-message",
      {
        messageId: options.messageId,
      },
      options.instanceId,
    );
  }

  /** update group settings */
  async updateGroupSettings(options: UpdateGroupSettingsOptions): Promise<any> {
    return this.action(
      "update-group-settings",
      {
        chatId: options.chatId,
        messageAdminOnly: options.messageAdminOnly,
      },
      options.instanceId,
    );
  }

  /** add group participant */
  async addGroupParticipant(options: AddGroupParticipantOptions): Promise<any> {
    return this.action(
      "add-group-participant",
      {
        chatId: options.chatId,
        participant: options.participant,
      },
      options.instanceId,
    );
  }

  /** remove group participant */
  async removeGroupParticipant(options: RemoveGroupParticipantOptions): Promise<any> {
    return this.action(
      "remove-group-participant",
      {
        chatId: options.chatId,
        participant: options.participant,
      },
      options.instanceId,
    );
  }

  /** promote group participant */
  async promoteGroupParticipant(options: PromoteGroupParticipantOptions): Promise<any> {
    return this.action(
      "promote-group-participant",
      {
        chatId: options.chatId,
        participant: options.participant,
      },
      options.instanceId,
    );
  }

  /** demote group participant */
  async demoteGroupParticipant(options: DemoteGroupParticipantOptions): Promise<any> {
    return this.action(
      "demote-group-participant",
      {
        chatId: options.chatId,
        participant: options.participant,
      },
      options.instanceId,
    );
  }

  /** approve group membership requests */
  async acceptGroupMemberRequests(options: AcceptGroupMemberRequestsOptions): Promise<any> {
    return this.action(
      "accept-group-member-requests",
      {
        chatId: options.chatId,
        requesterIds: options.requesterIds,
      },
      options.instanceId,
    );
  }

  /** deny group membership requests */
  async denyGroupMemberRequests(options: DenyGroupMemberRequestsOptions): Promise<any> {
    return this.action(
      "deny-group-member-requests",
      {
        chatId: options.chatId,
        requesterIds: options.requesterIds,
      },
      options.instanceId,
    );
  }

  /** get group membership requests */
  async getGroupMemberRequests(options: GetGroupMemberRequestsOptions): Promise<any> {
    return this.action(
      "get-group-member-requests",
      {
        chatId: options.chatId,
      },
      options.instanceId,
    );
  }

  /** accept group invite */
  async acceptInvite(options: AcceptInviteOptions): Promise<any> {
    return this.action(
      "accept-invite",
      {
        inviteCode: options.inviteCode,
      },
      options.instanceId,
    );
  }

  /** accept group invite */
  async acceptGroupInvite(options: AcceptGroupInviteOptions = {}): Promise<any> {
    return this.action(
      "accept-group-invite",
      {
        inviteCode: options.inviteCode,
        inviteData: options.inviteData,
      },
      options.instanceId,
    );
  }

  /** get group invite info */
  async getInviteInfo(options: GetInviteInfoOptions): Promise<any> {
    return this.action(
      "get-invite-info",
      {
        inviteCode: options.inviteCode,
      },
      options.instanceId,
    );
  }

  /** create a channel */
  async createChannel(options: CreateChannelOptions): Promise<any> {
    return this.action(
      "create-channel",
      {
        name: options.name,
        description: options.description,
        pictureUrl: options.pictureUrl,
      },
      options.instanceId,
    );
  }

  /** get channels */
  async getChannels(options: GetChannelsOptions = {}): Promise<any> {
    return this.action(
      "get-channels",
      {},
      options.instanceId,
    );
  }

  /** get channel by id */
  async getChannelById(options: GetChannelByIdOptions = {}): Promise<any> {
    return this.action(
      "get-channel-by-id",
      {
        channelId: options.channelId,
      },
      options.instanceId,
    );
  }

  /** subscribe to channel */
  async subscribeToChannel(options: SubscribeToChannelOptions = {}): Promise<any> {
    return this.action(
      "subscribe-to-channel",
      {
        channelId: options.channelId,
      },
      options.instanceId,
    );
  }

  /** unsubscribe from channel */
  async unsubscribeFromChannel(options: UnsubscribeFromChannelOptions = {}): Promise<any> {
    return this.action(
      "unsubscribe-from-channel",
      {
        channelId: options.channelId,
        deleteChannelData: options.deleteChannelData,
      },
      options.instanceId,
    );
  }

  /** search channels */
  async searchChannels(options: SearchChannelsOptions = {}): Promise<any> {
    return this.action(
      "search-channels",
      {
        countryCodes: options.countryCodes,
        searchText: options.searchText,
        view: options.view,
        limit: options.limit,
        skipSubscribedNewsletters: options.skipSubscribedNewsletters,
      },
      options.instanceId,
    );
  }

  /** [BETA] create a community */
  async createCommunity(options: CreateCommunityOptions): Promise<any> {
    return this.action(
      "create-community",
      {
        title: options.title,
        description: options.description,
        closed: options.closed,
        allowNonAdminSubGroupCreation: options.allowNonAdminSubGroupCreation,
        createGeneralChat: options.createGeneralChat,
        existingGroupIds: options.existingGroupIds,
      },
      options.instanceId,
    );
  }

  /** [BETA] get communities */
  async getCommunities(options: GetCommunitiesOptions = {}): Promise<any> {
    return this.action(
      "get-communities",
      {},
      options.instanceId,
    );
  }

  /** [BETA] get community by id */
  async getCommunityById(options: GetCommunityByIdOptions): Promise<any> {
    return this.action(
      "get-community-by-id",
      {
        communityId: options.communityId,
      },
      options.instanceId,
    );
  }

  /** [BETA] get community subgroups */
  async getCommunitySubgroups(options: GetCommunitySubgroupsOptions): Promise<any> {
    return this.action(
      "get-community-subgroups",
      {
        communityId: options.communityId,
      },
      options.instanceId,
    );
  }

  /** [BETA] send community announcement */
  async sendCommunityAnnouncement(options: SendCommunityAnnouncementOptions): Promise<any> {
    return this.action(
      "send-community-announcement",
      {
        communityId: options.communityId,
        target: options.target,
        message: options.message,
        mediaUrl: options.mediaUrl,
        mediaCaption: options.mediaCaption,
        mediaName: options.mediaName,
        previewLink: options.previewLink,
        asSticker: options.asSticker,
        asVoice: options.asVoice,
        asDocument: options.asDocument,
      },
      options.instanceId,
    );
  }

  /** [BETA] link community subgroup */
  async linkCommunitySubgroup(options: LinkCommunitySubgroupOptions): Promise<any> {
    return this.action(
      "link-community-subgroup",
      {
        communityId: options.communityId,
        groupIds: options.groupIds,
      },
      options.instanceId,
    );
  }

  /** [BETA] unlink community subgroup */
  async unlinkCommunitySubgroup(options: UnlinkCommunitySubgroupOptions): Promise<any> {
    return this.action(
      "unlink-community-subgroup",
      {
        communityId: options.communityId,
        groupIds: options.groupIds,
        removeOrphanMembers: options.removeOrphanMembers,
      },
      options.instanceId,
    );
  }

  /** [BETA] leave community */
  async leaveCommunity(options: LeaveCommunityOptions): Promise<any> {
    return this.action(
      "leave-community",
      {
        communityId: options.communityId,
      },
      options.instanceId,
    );
  }

  /** archive chat */
  async archiveChat(options: ArchiveChatOptions): Promise<any> {
    return this.action(
      "archive-chat",
      {
        chatId: options.chatId,
      },
      options.instanceId,
    );
  }

  /** unarchive chat */
  async unarchiveChat(options: UnarchiveChatOptions): Promise<any> {
    return this.action(
      "unarchive-chat",
      {
        chatId: options.chatId,
      },
      options.instanceId,
    );
  }

  /** get all labels */
  async getLabels(options: GetLabelsOptions = {}): Promise<any> {
    return this.action(
      "get-labels",
      {},
      options.instanceId,
    );
  }

  /** get label by id */
  async getLabelById(options: GetLabelByIdOptions): Promise<any> {
    return this.action(
      "get-label-by-id",
      {
        labelId: options.labelId,
      },
      options.instanceId,
    );
  }

  /** get chat labels */
  async getChatLabels(options: GetChatLabelsOptions): Promise<any> {
    return this.action(
      "get-chat-labels",
      {
        chatId: options.chatId,
      },
      options.instanceId,
    );
  }

  /** get chats by labelId */
  async getChatsByLabelId(options: GetChatsByLabelIdOptions): Promise<any> {
    return this.action(
      "get-chats-by-label-id",
      {
        labelId: options.labelId,
      },
      options.instanceId,
    );
  }

  /** change chat labels */
  async changeChatLabels(options: ChangeChatLabelsOptions): Promise<any> {
    return this.action(
      "change-chat-labels",
      {
        chatId: options.chatId,
        labelIds: options.labelIds,
      },
      options.instanceId,
    );
  }

  /** logout */
  async logout(options: LogoutOptions = {}): Promise<any> {
    return this.action(
      "logout",
      {},
      options.instanceId,
    );
  }

  /** reboot instance */
  async reboot(options: RebootOptions = {}): Promise<any> {
    return this.action(
      "reboot",
      {},
      options.instanceId,
    );
  }

  /** send presence available */
  async sendPresenceAvailable(options: SendPresenceAvailableOptions = {}): Promise<any> {
    return this.action(
      "send-presence-available",
      {},
      options.instanceId,
    );
  }

  /** set status */
  async setStatus(options: SetStatusOptions): Promise<any> {
    return this.action(
      "set-status",
      {
        status: options.status,
      },
      options.instanceId,
    );
  }

  /** set display name */
  async setDisplayName(options: SetDisplayNameOptions): Promise<any> {
    return this.action(
      "set-display-name",
      {
        displayName: options.displayName,
      },
      options.instanceId,
    );
  }

  /** request pairing code */
  async requestPairingCode(options: RequestPairingCodeOptions): Promise<any> {
    return this.action(
      "request-pairing-code",
      {
        phoneNumber: options.phoneNumber,
        showNotification: options.showNotification,
      },
      options.instanceId,
    );
  }

  /** send typing state */
  async sendTyping(options: SendTypingOptions): Promise<any> {
    return this.action(
      "send-typing",
      {
        chatId: options.chatId,
      },
      options.instanceId,
    );
  }

  /** clear chat messages */
  async clearChatMessages(options: ClearChatMessagesOptions): Promise<any> {
    return this.action(
      "clear-chat-messages",
      {
        chatId: options.chatId,
      },
      options.instanceId,
    );
  }

  /** sync chat history */
  async syncChatHistory(options: SyncChatHistoryOptions): Promise<any> {
    return this.action(
      "sync-chat-history",
      {
        chatId: options.chatId,
      },
      options.instanceId,
    );
  }

  /** stop typing indicator */
  async sendStopTyping(options: SendStopTypingOptions = {}): Promise<any> {
    return this.action(
      "send-stop-typing",
      {
        chatId: options.chatId,
      },
      options.instanceId,
    );
  }

  /** send presence unavailable */
  async sendPresenceUnavailable(options: SendPresenceUnavailableOptions = {}): Promise<any> {
    return this.action(
      "send-presence-unavailable",
      {},
      options.instanceId,
    );
  }

  /** [BETA] subscribe to and fetch current presence of a chat */
  async getChatPresence(options: GetChatPresenceOptions): Promise<any> {
    return this.action(
      "get-chat-presence",
      {
        chatId: options.chatId,
        waitForData: options.waitForData,
        timeoutMs: options.timeoutMs,
      },
      options.instanceId,
    );
  }

  /** [BETA] read cached presence for a chat without subscribing */
  async getChatPresenceSnapshot(options: GetChatPresenceSnapshotOptions): Promise<any> {
    return this.action(
      "get-chat-presence-snapshot",
      {
        chatId: options.chatId,
      },
      options.instanceId,
    );
  }

  /** send event message */
  async sendEvent(options: SendEventOptions): Promise<any> {
    return this.action(
      "send-event",
      {
        chatId: options.chatId,
        name: options.name,
        startTime: options.startTime,
        description: options.description,
        endTime: options.endTime,
        location: options.location,
        callType: options.callType,
      },
      options.instanceId,
    );
  }

  /** vote on poll */
  async voteOnPoll(options: VoteOnPollOptions): Promise<any> {
    return this.action(
      "vote-on-poll",
      {
        messageId: options.messageId,
        selectedOptions: options.selectedOptions,
      },
      options.instanceId,
    );
  }

  /** edit scheduled event */
  async editScheduledEvent(options: EditScheduledEventOptions): Promise<any> {
    return this.action(
      "edit-scheduled-event",
      {
        messageId: options.messageId,
        name: options.name,
        startTimeTs: options.startTimeTs,
        eventSendOptions: options.eventSendOptions,
      },
      options.instanceId,
    );
  }

  /** get pinned messages */
  async getPinnedMessages(options: GetPinnedMessagesOptions): Promise<any> {
    return this.action(
      "get-pinned-messages",
      {
        chatId: options.chatId,
      },
      options.instanceId,
    );
  }

  /** set device name */
  async setDeviceName(options: SetDeviceNameOptions = {}): Promise<any> {
    return this.action(
      "set-device-name",
      {
        deviceName: options.deviceName,
        browserName: options.browserName,
      },
      options.instanceId,
    );
  }

  /** create call link */
  async createCallLink(options: CreateCallLinkOptions): Promise<any> {
    return this.action(
      "create-call-link",
      {
        startTime: options.startTime,
        callType: options.callType,
      },
      options.instanceId,
    );
  }

  /** send event response */
  async sendEventResponse(options: SendEventResponseOptions): Promise<any> {
    return this.action(
      "send-event-response",
      {
        eventResponse: options.eventResponse,
        eventMessageId: options.eventMessageId,
      },
      options.instanceId,
    );
  }

  /** revoke status message */
  async revokeStatusMessage(options: RevokeStatusMessageOptions): Promise<any> {
    return this.action(
      "revoke-status-message",
      {
        messageId: options.messageId,
      },
      options.instanceId,
    );
  }

  /** add customer note */
  async addCustomerNote(options: AddCustomerNoteOptions): Promise<any> {
    return this.action(
      "add-customer-note",
      {
        chatId: options.chatId,
        note: options.note,
      },
      options.instanceId,
    );
  }

  /** get customer note */
  async getCustomerNote(options: GetCustomerNoteOptions): Promise<any> {
    return this.action(
      "get-customer-note",
      {
        chatId: options.chatId,
      },
      options.instanceId,
    );
  }

  /** get broadcast */
  async getBroadcast(options: GetBroadcastOptions): Promise<any> {
    return this.action(
      "get-broadcast",
      {
        contactId: options.contactId,
      },
      options.instanceId,
    );
  }

  /** revoke status */
  async revokeStatus(options: RevokeStatusOptions): Promise<any> {
    return this.action(
      "revoke-status",
      {
        messageId: options.messageId,
      },
      options.instanceId,
    );
  }

  /** [BETA] get privacy settings */
  async getPrivacySettings(options: GetPrivacySettingsOptions = {}): Promise<any> {
    return this.action(
      "get-privacy-settings",
      {},
      options.instanceId,
    );
  }

  /** [BETA] set privacy setting */
  async setPrivacySetting(options: SetPrivacySettingOptions): Promise<any> {
    return this.action(
      "set-privacy-setting",
      {
        category: options.category,
        value: options.value,
        disallowedList: options.disallowedList,
      },
      options.instanceId,
    );
  }

  /** [BETA] get disappearing messages */
  async getDisappearingMessages(options: GetDisappearingMessagesOptions): Promise<any> {
    return this.action(
      "get-disappearing-messages",
      {
        chatId: options.chatId,
      },
      options.instanceId,
    );
  }

  /** [BETA] set disappearing messages */
  async setDisappearingMessages(options: SetDisappearingMessagesOptions): Promise<any> {
    return this.action(
      "set-disappearing-messages",
      {
        chatId: options.chatId,
        duration: options.duration,
      },
      options.instanceId,
    );
  }

  /** [BETA] get disappearing durations */
  async getDisappearingDurations(options: GetDisappearingDurationsOptions = {}): Promise<any> {
    return this.action(
      "get-disappearing-durations",
      {},
      options.instanceId,
    );
  }

  /** [BETA] get business profile */
  async getBusinessProfile(options: GetBusinessProfileOptions = {}): Promise<any> {
    return this.action(
      "get-business-profile",
      {
        userId: options.userId,
        withCompliance: options.withCompliance,
      },
      options.instanceId,
    );
  }

  /** [BETA] get business categories */
  async getBusinessCategories(options: GetBusinessCategoriesOptions = {}): Promise<any> {
    return this.action(
      "get-business-categories",
      {
        parentId: options.parentId,
      },
      options.instanceId,
    );
  }

  /** [BETA] set business profile */
  async setBusinessProfile(options: SetBusinessProfileOptions = {}): Promise<any> {
    return this.action(
      "set-business-profile",
      {
        description: options.description,
        email: options.email,
        address: options.address,
        latitude: options.latitude,
        longitude: options.longitude,
        website: options.website,
        categories: options.categories,
        businessHours: options.businessHours,
        priceTier: options.priceTier,
        serviceAreas: options.serviceAreas,
      },
      options.instanceId,
    );
  }

  /** [BETA] get quick replies */
  async getQuickReplies(options: GetQuickRepliesOptions = {}): Promise<any> {
    return this.action(
      "get-quick-replies",
      {},
      options.instanceId,
    );
  }

  /** [BETA] create quick reply */
  async createQuickReply(options: CreateQuickReplyOptions): Promise<any> {
    return this.action(
      "create-quick-reply",
      {
        shortcut: options.shortcut,
        message: options.message,
        keywords: options.keywords,
      },
      options.instanceId,
    );
  }

  /** [BETA] update quick reply */
  async updateQuickReply(options: UpdateQuickReplyOptions): Promise<any> {
    return this.action(
      "update-quick-reply",
      {
        id: options.id,
        shortcut: options.shortcut,
        message: options.message,
        keywords: options.keywords,
      },
      options.instanceId,
    );
  }

  /** [BETA] delete quick reply */
  async deleteQuickReply(options: DeleteQuickReplyOptions): Promise<any> {
    return this.action(
      "delete-quick-reply",
      {
        id: options.id,
      },
      options.instanceId,
    );
  }
}
