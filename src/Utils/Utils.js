export default function userLanguage () {
  let browserLanguage = navigator.language || navigator.userLanguage;
  browserLanguage = (browserLanguage && browserLanguage.indexOf('-') !== -1) ? browserLanguage.slice(0, browserLanguage.indexOf('-')) : browserLanguage;
  return (browserLanguage);
}
