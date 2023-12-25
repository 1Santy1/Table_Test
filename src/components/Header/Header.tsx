import React from "react"
import Icon from "./../images/glavicon.svg";
import Link from "./../images/link.svg";

export default function Header() {
    return (
        <div className="container">
            <div className="header">
                <div className="img_icon">
                    <a href="#">
                        <img src={Icon} alt="" />
                    </a>
                </div>

                <div className="img_link">
                    <a href="#">
                        <img src={Link} alt="" />
                    </a>
                </div>

                <div className="header_title">
                    <a href="#" >
                        <p className="text_view">
                            Просмотр
                        </p>
                    </a>

                    <a href="#">
                        <p className="text_control">
                            Управление
                        </p>
                    </a>
                </div>
            </div>
            <hr />
        </div>
    )
}