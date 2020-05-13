import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Lucky读书'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
