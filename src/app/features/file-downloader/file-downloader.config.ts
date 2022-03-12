import { CellDecorator, TableColumn } from 'src/app/shared/components/table/table.model';

const COLUMNS: TableColumn[] = [
  { header: 'Name', field: 'name' },
  { header: 'Device', field: 'device' },
  { header: 'Path', field: 'path', colspan: 2 },
  { header: 'Status', field: 'status', decorator: CellDecorator.STATUS },
];
export default COLUMNS;
