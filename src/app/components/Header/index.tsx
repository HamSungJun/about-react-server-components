"use client";

import "@/app/components/Header/index.scss";
import Link from "next/link";
import { FaPencilAlt } from "react-icons/fa";
const ROUTE_PATH_MAP = {
  ARTICLE_WRITE: "/article/write",
};

export default function Header() {
  return (
    <header className="header">
      <div className="header__brand-box">Blog</div>
      <div className="header__nav-box">
        <nav>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link className="nav-link" href={ROUTE_PATH_MAP.ARTICLE_WRITE}>
                <FaPencilAlt className="pencil-icon" fill="white" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
