import { Key } from 'react';

export interface IModalDeleteProps {
  id?: Key | null;
  onCancel: () => void;
  setReload: () => void;
}

export interface IData {
  id: Key;
  title: string;
  description: string;
  date: string;
  time: string;
  photo: string;
}
