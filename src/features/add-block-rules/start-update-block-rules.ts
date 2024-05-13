import { accountControllerGetAccount, authControllerGetSessionInfo } from '@/shared/api/generated';
import { setBrowserInterval, setNetRules } from '@/shared/lib/browser';
import { getBlockListNetRules } from './get-block-list-net-rules';

export function startUpdateBlockRules() {
  setBrowserInterval(
    'update-block-rules',
    async () => {
      const isAuth = await authControllerGetSessionInfo().then(
        () => true,
        () => false,
      );

      if (!isAuth) {
        return await setNetRules([]);
      }

      const isBlockingEnabled = await accountControllerGetAccount().then(
        (res) => res.isBlockingEnabled,
      );

      if (!isBlockingEnabled) {
        return await setNetRules([]);
      }

      setNetRules(await getBlockListNetRules());
    },
    5 * 1000,
  );
}
