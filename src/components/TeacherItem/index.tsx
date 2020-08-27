import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import api from '../../services/api';

import { TeacherArticle } from './styles.js';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    function createNewConnection() {
        api.post('connections', {
            user_id: teacher.id
        });
    }

    return (
        <TeacherArticle>
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>
            <p>
                {teacher.bio}
            </p>
            <footer>
                <p>
                    Preço por hora: <strong>R$ {teacher.cost}</strong>
                </p>
                <a href={`https://wa.me/${Number(teacher.whatsapp)}`} onClick={createNewConnection} target="_blank" rel="noopener noreferrer">
                    <img src={whatsappIcon} alt="whatsapp" />
                Entrar em contato
            </a>
            </footer>
        </TeacherArticle>
    )
}

export default TeacherItem;