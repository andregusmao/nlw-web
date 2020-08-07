import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import api from '../../services/api';

function TeacherForm() {
    const history = useHistory();

    const [name, setName] = useState<string>('');
    const [avatar, setAvatar] = useState<string>('');
    const [whatsapp, setWhatsapp] = useState<string>('');
    const [bio, setBio] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [cost, setCost] = useState<string>('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([...scheduleItems, {
            week_day: 0,
            from: '',
            to: ''
        }]);
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso');
            history.push('/');
        }).catch((error) => {
            alert('Ocorreu um erro no cadastro');
        });

        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            scheduleItems
        });
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
            }
            return scheduleItem;
        });
        setScheduleItems(updatedScheduleItems);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input name="name" label="Nome completo" value={name} onChange={e => setName(e.target.value)} />
                        <Input name="avatar" label="Avatar" value={avatar} onChange={e => setAvatar(e.target.value)} />
                        <Input name="whatsapp" label="Whatsapp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
                        <Textarea name="bio" label="Biografia" value={bio} onChange={e => setBio(e.target.value)} />
                    </fieldset>
                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <Select name="subject"
                            label="Matéria"
                            value={subject}
                            onChange={e => setSubject(e.target.value)}
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Ciências', label: 'Ciências' },
                                { value: 'Português', label: 'Português' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'História', label: 'História' },
                            ]}
                        />
                        <Input name="cost" label="Custo da sua hora por aula" value={cost} onChange={e => setCost(e.target.value)} />
                    </fieldset>
                    <fieldset>
                        <legend>
                            Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                        </button>
                        </legend>
                        {
                            scheduleItems.map((scheduleItem, index) => (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="week-day"
                                        label="Dia da Semana"
                                        value={scheduleItem.week_day}
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-feira' },
                                            { value: '2', label: 'Terça-feira' },
                                            { value: '3', label: 'Quarta-feira' },
                                            { value: '4', label: 'Quinta-feira' },
                                            { value: '5', label: 'Sexta-feira' },
                                            { value: '6', label: 'Sábado' },
                                        ]}
                                    />
                                    <Input
                                        type="time"
                                        name="from"
                                        label="Das"
                                        value={scheduleItem.from}
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)} />
                                    <Input
                                        type="time"
                                        name="to"
                                        label="Até"
                                        value={scheduleItem.to}
                                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)} />
                                </div>
                            ))
                        }
                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                        <button type="submit">
                            Salvar cadastro
                    </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;