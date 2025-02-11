import { Key } from 'react';

export interface IModalEditProps {
  id?: Key | null;
  onCancel: () => void;
  setReload: () => void;
}
