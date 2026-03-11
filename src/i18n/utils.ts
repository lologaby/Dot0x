import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  // Strip the Astro base path (e.g. '/Dot0x') before extracting the lang segment
  const base = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, '');
  const pathname = base && url.pathname.startsWith(base)
    ? url.pathname.slice(base.length)
    : url.pathname;
  const [, lang] = pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const base = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL;
    return `${base}/${l}${path === '/' ? '' : path}`;
  }
}
