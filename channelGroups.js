import { getEnvFromStorage } from "./memoryStorage";
import { get } from "./object";

const CHANNEL_GROUPS = [
  {
    label: "Fox Nation",
    value: "fox_nation"
  },
  {
    label: "Fox Sports",
    value: "fox_sports"
  },
  {
    label: "Fox O&O",
    value: "fox_owned_affiliates"
  },
  {
    label: "Fox Non-O&O",
    value: "fox_nonowned_affiliates"
  },
  {
    label: "Fox News",
    value: "fox_news"
  },
  {
    label: "My Network TV",
    value: "fox_owned_mynets"
  },
  {
    label: "Fox National",
    value: "fox_national"
  },
  {
    label: "Fox Staging",
    value: "fox_staging"
  },
  {
    label: "Fox UHD",
    value: "fox_uhd"
  }
];

const capitalize = channelGroup =>
  channelGroup.charAt(0).toUpperCase() + channelGroup.slice(1);

const createChannelGroupPair = channelGroup => ({
  value: channelGroup,
  label: channelGroup
    .split("_")
    .map(capitalize)
    .join(" ")
});

const mapChannelGroup = channelGroup => {
  return (
    CHANNEL_GROUPS.find(({ value }) => value === channelGroup) ||
    createChannelGroupPair(channelGroup)
  );
};

function getChannelGroups() {
  const envData = getEnvFromStorage();
  const permittedChannelGroups = get(envData, "permissions.channelGroups", []);

  // TODO: once DPP-1365 is deployed, we can default to `[]`
  if (!permittedChannelGroups.length) {
    return CHANNEL_GROUPS;
  }

  return permittedChannelGroups.map(mapChannelGroup);
}

export const allChannelGroupsValues = CHANNEL_GROUPS.map(it => it.value);

export default getChannelGroups;
