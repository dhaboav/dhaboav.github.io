import { useI18n } from '@/shared/lib';
import { NotFound } from '@/shared/ui';

export const NotFoundPage = () => {
  const { ui } = useI18n();
  return (
    <NotFound
      pageTitle={ui.notfound.pageTitle}
      pageDesc={ui.notfound.pageDesc}
      buttonLabel={ui.notfound.buttonLabel}
    />
  );
};
