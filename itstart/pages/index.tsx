import React, { Key, useEffect, useState } from 'react';
import axios from 'axios';
import style from './index.module.scss';
import Image from 'next/image';
import ModalDelete from '@/app/components/ModalDelete/ModalDelete';
import ModalEdit from '@/app/components/ModalEdit/ModalEdit';
import { IData } from './types';

export default function index() {
  const [loading, setLoading] = useState(true);
  const [dataSem, setDataSem] = useState([]);

  const [del, setDel] = useState(false);
  const [modalId, setModalId] = useState<Key | null>(null);
  const [reload, setReload] = useState(false);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          'http://localhost:3000/seminars'
        );
        setDataSem(response);
      } catch (error: any) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, [reload]);
  return (
    <div>
      {del && (
        <ModalDelete
          id={modalId}
          onCancel={() => setDel(!del)}
          setReload={() => setReload(!reload)}
        />
      )}
      {edit && (
        <ModalEdit
          id={modalId}
          onCancel={() => setEdit(!edit)}
          setReload={() => setReload(!reload)}
        />
      )}
      <h1>Наши семинары</h1>
      {loading && <div>Loading...</div>}
      {!loading && (
        <div className={style.list}>
          {dataSem.map((item: IData) => (
            <div key={item.id} className={style.item}>
              <div className={style.info}>
                <Image
                  loader={() => item.photo}
                  alt={item.title}
                  src={item.photo}
                  width={10}
                  height={10}
                  className={style.img}
                />
                <h3 className={style.title}>{item.title}</h3>
                <p className={style.description}>{item.description}</p>
                <p>Дата: {item.date}</p>
                <p>Время: {item.time}</p>
              </div>

              <div className={style.panel}>
                <button
                  onClick={() => {
                    setModalId(item.id);
                    setDel(!del);
                  }}
                  className={style.del}
                >
                  Удалить
                </button>
                <button
                  className={style.edit}
                  onClick={() => {
                    setModalId(item.id);
                    setEdit(!edit);
                  }}
                >
                  Редактировать
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
