import { useI18n } from '@/shared/lib';
import { NotFound } from '@/shared/components';

export function NotFoundPage() {
  const { ui } = useI18n();
  const { sectionTitle, subtitle, backButtonLabel } = ui.notfoundPage;
  return <NotFound pageTitle={sectionTitle} pageDesc={subtitle} buttonLabel={backButtonLabel} />;
}
