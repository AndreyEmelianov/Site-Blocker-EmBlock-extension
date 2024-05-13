import { ToggleBlockingButton } from '@/features/toggle-blocking';
import { ADMIN_URL } from '@/shared/constants';
import { createTab } from '@/shared/lib/browser';
import { UiButton } from '@/shared/ui/ui-button';
import { UiLogo } from '@/shared/ui/ui-logo';

export function HomePage() {
  return (
    <div className="p-8 flex flex-col gap-3">
      <UiLogo className="-ml-6" />
      <ToggleBlockingButton />
      <UiButton variant="outlined" onClick={() => createTab(ADMIN_URL)}>
        Manage extension
      </UiButton>
    </div>
  );
}
