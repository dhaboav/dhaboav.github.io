import { useI18n, languages, type SupportedLang } from '@/shared/lib';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui';

export function Footer() {
  const { lang, setLang } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 text-sm text-zinc-500 lg:py-8">
        <span className="font-mono" aria-label="copyright">
          ©{currentYear} Dhaboav
        </span>

        <Select value={lang} onValueChange={(value) => setLang(value as SupportedLang)}>
          <SelectTrigger className="w-full max-w-20 bg-zinc-900 text-white">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-zinc-900 text-white">
            {languages.map((langItem) => (
              <SelectItem key={langItem.label} value={langItem.label} className="hover:bg-zinc-500">
                {langItem.flag} {langItem.full}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </footer>
  );
}
