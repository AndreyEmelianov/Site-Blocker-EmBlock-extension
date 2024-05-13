export const createTab = (url: string) => {
  chrome.tabs.create({ url });
};

export type NetRules = chrome.declarativeNetRequest.Rule;

export const setNetRules = async (newRules: NetRules[]) => {
  const oldRules = await chrome.declarativeNetRequest.getDynamicRules();
  const oldRuleIds = oldRules.map((rule) => rule.id);

  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: oldRuleIds,
    addRules: newRules,
  });
};

export const setBrowserInterval = async (name: string, cb: () => void, timeout: number) => {
  await chrome.alarms.create(name, {
    delayInMinutes: timeout / (1000 * 60),
    periodInMinutes: timeout / (1000 * 60),
  });

  chrome.alarms.onAlarm.addListener((alarm) => {
    if (name === alarm.name) {
      cb();
    }
  });
};

export const addInstallListener = async (cb: () => Awaited<void>) => {
  chrome.runtime.onInstalled.addListener(async ({ reason }) => {
    if (reason !== 'install') {
      return;
    }

    await cb();
  });
};
