import React from "react"
import Scroll from "./../images/scroll.svg";

export default function List() {
    return (
        <div className="list_item">
            <div className="list">
                <div className="list_scroll">
                    <img src={Scroll} alt="" />
                    <p className="list_title">По проекту</p>
                </div>

                <div className="list_scroll">
                    <img src={Scroll} alt="" />
                    <p className="list_title">Объекты</p>
                </div>

                <div className="list_scroll">
                    <img src={Scroll} alt="" />
                    <p className="list_title">РД</p>
                </div>

                <div className="list_scroll">
                    <img src={Scroll} alt="" />
                    <p className="list_title">МТО</p>
                </div>

                <div className="list_scroll">
                    <img src={Scroll} alt="" />
                    <p className="list_title">СМР</p>
                </div>

                <div className="list_scroll">
                    <img src={Scroll} alt="" />
                    <p className="list_title">График</p>
                </div>

                <div className="list_scroll">
                    <img src={Scroll} alt="" />
                    <p className="list_title">МиМ</p>
                </div>

                <div className="list_scroll">
                    <img src={Scroll} alt="" />
                    <p className="list_title">Рабочие</p>
                </div>

                <div className="list_scroll">
                    <img src={Scroll} alt="" />
                    <p className="list_title">Капвложения</p>
                </div>

                <div className="list_scroll">
                    <img src={Scroll} alt="" />
                    <p className="list_title">Бюджет</p>
                </div>

                <div className="list_scroll">
                    <img src={Scroll} alt="" />
                    <p className="list_title">Финансирование</p>
                </div>

                <div className="list_scroll">
                    <img src={Scroll} alt="" />
                    <p className="list_title">Панорамы</p>
                </div>

                <div className="list_scroll">
                    <img src={Scroll} alt="" />
                    <p className="list_title">Камеры</p>
                </div>

                <div className="list_scroll">
                    <img src={Scroll} alt="" />
                    <p className="list_title">Поручения</p>
                </div>

                <div className="list_scroll">
                    <img src={Scroll} alt="" />
                    <p className="list_title">Контрагенты</p>
                </div>
            </div>
        </div>
    )
}