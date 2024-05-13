import { UiButton } from '@/shared/ui/ui-button';
import { useToggleBlocking } from '../model/use-toggle-blocking';

export function ToggleBlockingButton() {
  const { isBlockingEnabled, isLoading, isReady, toggleBlocking } = useToggleBlocking();

  if (!isReady) {
    return null;
  }

  return (
    <UiButton
      disabled={isLoading}
      variant={isBlockingEnabled ? 'secondary' : 'primary'}
      onClick={toggleBlocking}>
      {isBlockingEnabled ? 'Disable Block' : 'Enable Block'}
    </UiButton>
  );
}
