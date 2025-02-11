import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from './ModalEdit.module.scss';
import { IModalEditProps } from './types';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function ModalEdit({
  id,
  onCancel,
  setReload,
}: IModalEditProps) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [photo, setPhoto] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [dateState, setDateState] = useState<Date>(new Date());
  const [time, setTime] = useState<string>('');
  const changeDate = (e: any) => {
    setDateState(e);
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          `http://localhost:3000/seminars/${id}`
        );
        setData(response);
      } catch (error: any) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  useEffect(() => {
    if (data) {
      setDateState(
        new Date(
          `${data.date.slice(-4)}-${data.date.slice(3, 5)}-${data.date.slice(
            0,
            2
          )}`
        )
      );
      setPhoto(data.photo);
      setTitle(data.title);
      setDescription(data.description);
      setTime(data.time);
    }
  }, [data]);
  function editSeminar() {
    axios
      .put(`http://localhost:3000/seminars/${id}`, {
        photo: photo,
        title: title,
        description: description,
        date: `${dateState.getDate()}.${
          dateState.getMonth() + 1
        }.${dateState.getFullYear()}`,
        time: time,
      })
      .then((response) => {
        console.log(`Edited post with ID ${id}`);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        onCancel();
        setReload();
      });
  }
  return (
    <div className={style.root} onClick={onCancel}>
      <div
        className={style.block}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h3 className={style.head}>Редактирование семенара:</h3>
        {loading && <div>Loading...</div>}
        {!loading && data && (
          <div className={style.list}>
            <div>
              <p>Ссылка на изображение:</p>
              <input
                type="text"
                className={style.inp}
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </div>
            <div>
              <p>Заголовок:</p>
              <input
                type="text"
                className={style.inp}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <p>Описание:</p>
              <input
                type="text"
                className={style.inp}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <p>Дата:</p>
              {dateState && (
                <Calendar
                  value={dateState}
                  onChange={(e) => {
                    changeDate(e);
                  }}
                />
              )}
            </div>
            <div>
              <p>Время:</p>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
        )}
        <div className={style.panel}>
          <button className={style.edit} onClick={editSeminar}>
            Применить
          </button>
          <button className={style.cancel} onClick={onCancel}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
}
