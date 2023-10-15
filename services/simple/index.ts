import api from '@/utils/api';

export function getSupportedCurrencies() {
  return api
    .get<string[]>('/v3/simple/supported_vs_currencies')
    .then((response) => response.data);
}
