
interface BaseFilter {
  key: string;
  label: string;
}
interface FilterTextDate extends BaseFilter {
  value?: string;
}

export interface FilterText extends FilterTextDate {
  type: "text";
}

export interface FilterDate extends FilterTextDate {
  type: "date";
}


export type Filter = FilterText | FilterDate
