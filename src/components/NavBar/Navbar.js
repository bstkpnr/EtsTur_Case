import React from 'react';
import '../styles/style.scss';

export default function Navbar() {
    return (
      <nav className='navigation'>
        <a href='/'>ETKİNLİK BUL</a>
        <div className='nav-menu'>
            <ul>
                <li>
                    <a href='/music'>Müzik</a>
                </li>
                <li>
                    <a href='/stage'>Sahne</a>
                </li>
                <li>
                    <a href='/sport'>Spor</a>
                </li>
                <li>
                    <a href='/education'>Eğitim ve Daha Fazlası</a>
                </li>
            </ul>
        </div>
        <input type="text" placeholder="Search.." />

      </nav>
      )
  }