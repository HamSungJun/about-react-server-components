"use client";

import "@/app/components/Header/index.scss";
import Link from "next/link";
import { FaPencilAlt } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header">
      <div className="header__brand-box">
        <Link className="nav-link" href="/">
          Blog
        </Link>
      </div>
      <div className="header__nav-box">
        <nav>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link className="nav-link" href="/article/write">
                <FaPencilAlt className="pencil-icon" fill="white" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
