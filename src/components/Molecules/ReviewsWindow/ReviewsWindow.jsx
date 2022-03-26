import React, { useState } from "react";
import { Review } from "../../Atoms/Review/Review";
import { Button } from "../../Atoms/Button/Button";
import { FaInfo as Info } from "react-icons/fa";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../../Organisms/Modal/Modal";
import "./reviewsWindow.css";
import { Input } from "../../Atoms/Input/Input";

export function ReviewsWindow() {
  const [showModal, setShowModal] = useState(false);
  const data = [
    {
      name: "Ivan Avan",
      date: `12.12.12`,
      content:
        "Наша компания благодарна фирме ilink за сотрудничество. Хотелось бы отметить отличную работу сотрудников: все было выполнено качественно, со знанием дела, в установленные сроки. За время работы с компанией значительно увеличилась аудитория, сайт приносит стабильный доход, контент уникальный, грамотный и качественный. Будет продолжать работу и дальше. Мы довольны, что доверили создание сайта компании ilink.",
      url: "https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1",
    },
    {
      name: "Vanya Ivan",
      date: `11.12.11`,
      content:
        "Наша компания благодарна фирме ilink за сотрудничество. Хотелось бы отметить отличную работу сотрудников: все было выполнено качественно, со знанием дела, в установленные сроки. За время работы с компанией значительно увеличилась аудитория, сайт приносит стабильный доход, контент уникальный, грамотный и качественный. Будет продолжать работу и дальше. Мы довольны, что доверили создание сайта компании ilink.",
      url: "https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1",
    },
    {
      name: "Vanya Ivan",
      date: `11.12.11`,
      content:
        "Наша компания благодарна фирме ilink за сотрудничество. Хотелось бы отметить отличную работу сотрудников: все было выполнено качественно, со знанием дела, в установленные сроки. За время работы с компанией значительно увеличилась аудитория, сайт приносит стабильный доход, контент уникальный, грамотный и качественный. Будет продолжать работу и дальше. Мы довольны, что доверили создание сайта компании ilink.",
      url: "https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1",
    },
  ];
  return (
    <div className="reviews">
      <div className="reviews_container">
        <div className="reviews_container_title">
          <div>
            <h2>Отзывы</h2>
          </div>
          <Button onClick={() => setShowModal(true)}>+ Добавить отзыв </Button>
          <Modal show={showModal}>
            <ModalHeader>
              <h2>Отзыв</h2>
              <div className="modal_close" onClick={() => setShowModal(false)}>
                &times;
              </div>
            </ModalHeader>
            <ModalBody>
              <p style={{ textAlign: "justify" }}>
                <div className="input_label">
                  <label>
                    <b>Как вас зовут?</b>
                  </label>
                </div>
                <div className="input_container">
                  <Input placeholder={"Имя Фамилия"} type={"text"} />
                  <Button>+ Загрузить фото</Button>
                </div>
                <div className="input_label">
                  <label>
                    <b>Все ли вам понравилось?</b>
                  </label>
                </div>
                <div className="input_container">
                  <Input
                    placeholder={"Напишите немного о себе"}
                    type="textarea"
                  />
                </div>
              </p>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setShowModal(false)}>
                Отправить отзыв
              </Button>
              <div className="info_block">
                <Info className="footer_icon" />
                <div className="info_block_text">
                  Все отзывы проходят модерацию в течение 2 часов
                </div>
              </div>
            </ModalFooter>
          </Modal>
        </div>
        <div className="reviews_container_slider">
          {data.map(({ name, date, content, url }, index) => {
            return (
              <Review
                key={index}
                name={name}
                date={date}
                content={content}
                url={url}
              />
            );
          })}
        </div>
      </div>
      <div className="reviews_controls">
        <div>
          <button disabled className="reviews_controls_left">
            ←
          </button>
        </div>
        <div>
          <button className="reviews_controls_right">→</button>
        </div>
      </div>
    </div>
  );
}
