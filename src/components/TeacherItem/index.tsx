import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/4572757?s=460&u=6bc4f535b29a5e860ee94b5718dbedb52470c039&v=4" alt="André Gusmão" />
                <div>
                    <strong>André Gusmão</strong>
                    <span>Programação</span>
                </div>
            </header>
            <p>
                Desenvolvedor com mais de 25 anos de experiência em diversas platasformas.
        </p>
            <footer>
                <p>
                    Preço por hora: <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
                Entrar em contato
            </button>
            </footer>
        </article>
    )
}

export default TeacherItem;