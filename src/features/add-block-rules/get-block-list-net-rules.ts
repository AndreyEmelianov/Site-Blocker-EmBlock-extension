import { blockListControllerGetList, BlockItemDtoType } from '@/shared/api/generated';
import { NetRules, NetRuleActionType, NetRuleResourceType } from '@/shared/lib/browser';

export async function getBlockListNetRules() {
  const blockList = await blockListControllerGetList();

  return blockList.items
    .filter((item) => item.type === BlockItemDtoType.Website)
    .map(
      (item): NetRules => ({
        id: item.id,
        action: { type: NetRuleActionType.BLOCK },
        condition: item.data.startsWith('regexp:')
          ? {
              regexFilter: item.data.replace('regexp:', ''),
              resourceTypes: [NetRuleResourceType.MAIN_FRAME],
            }
          : {
              urlFilter: item.data,
              resourceTypes: [NetRuleResourceType.MAIN_FRAME],
            },
      }),
    );
}
