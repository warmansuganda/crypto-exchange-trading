export interface SpotFormProps {
  type?: 'buy' | 'sell';
}

export interface SpotFormInput {
  price?: number;
  amount?: number;
  total?: number;
}
