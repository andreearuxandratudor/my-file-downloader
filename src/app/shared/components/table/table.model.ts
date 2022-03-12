export interface TableColumn {
  header: string;
  field: string;
  colspan?: number;
  decorator?: CellDecorator;
}

export enum CellDecorator {
  STATUS = 'STATUS'
}
