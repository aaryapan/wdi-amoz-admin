export interface SelectOption {
  value: string;
  label: string;
}

export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';

export type Size = 'sm' | 'md' | 'lg';

export interface BaseComponentProps {
  className?: string;
  id?: string;
}

