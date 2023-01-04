/**
 * URL과 SearchParams로 URL을 만드는 함수
 *
 * @param {string} baseUrl - 기본 URL
 * @param {Record<string,string>} searchParams - QueryString을 만들기 위한 SearchParams
 * @returns {string} - 기본 URL과 SearchParams로 만들어진 URL
 */
export const createUrl = (baseUrl: string, searchParams: Record<string, string> = {}) => {
  const url = new URL(baseUrl);
  for (const key in searchParams) {
    url.searchParams.set(key, searchParams[key]);
  }
  return url.toString();
};
