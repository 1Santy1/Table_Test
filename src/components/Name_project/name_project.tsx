import React from "react"
import Arrow from "./../images/arrow.svg";

export default function Name() {
    return (
        <div className="container">
            <div className="header_table">
                <div className="header_item">
                    <h1 className="header_name">
                        Название проекта
                    </h1>
                    <p className="header_name_item">Аббревиатура</p>
                </div>

                <div className="header_arrow_svg_item">
                    <div className="header_arrow_svg">
                        <img src={Arrow} alt="" />
                    </div>
                </div>


                <h1 className="header_name_main">
                    Строительно-монтажные работы
                </h1>
            </div>
            <hr />
        </div>
    )
}