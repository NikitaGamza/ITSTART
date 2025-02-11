import React, { Key, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import style from './ModalDelete.module.scss';
import { IModalDeleteProps, IData } from './types';

export default function ModalDelete({
  id,
  onCancel,
  setReload,
}: IModalDeleteProps) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `http://localhost:3000/seminars/${id}`
        );
        setData(response);
        console.log(data);
      } catch (error: any) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  function deleteSeminar() {
    axios
      .delete(`http://localhost:3000/seminars/${id}`)
      .then((response) => {
        console.log(`Deleted post with ID ${id}`);
      })
      .catch((error) => {
        console.error(error);
      });
    onCancel();
    setReload();
  }
  return (
    <div className={style.root} onClick={onCancel}>
      <div
        className={style.block}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h3 className={style.head}>Вы действительно хотите удалить семенар:</h3>
        {loading && <div>Loading...</div>}
        {!loading && data && <h3>{data.title}</h3>}
        <div className={style.panel}>
          <button className={style.del} onClick={deleteSeminar}>
            Удалить
          </button>
          <button className={style.cancel} onClick={onCancel}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
}
