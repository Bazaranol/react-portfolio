import React from "react";
import { Header } from "../Organisms/Header/Header";
import { Content } from "../Organisms/Content/Content";
import { Footer } from "../Organisms/Footer/Footer";

export function Page() {
  const props = {
    name: "Роман Сидоркин",
    date: "04.07.2000",
    city: "Томск",
    sex: "мужчина",
    age: "21",
    content:
      " Всем привет! Меня зовут Яна, мне 22 года, я студент. Учусь на программиста, но хочу стать продуктовым аналитиком. Недавно,например, я начала проходить курс на известной платформе, который поможет мне устроиться на работу моей мечты!",
  };
  return (
    <>
      <Header name="Роман Сидоркин" />
      <Content props={props} />
      <Footer />
    </>
  );
}
