import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import { Header, TopBar, Content } from './styles';

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <Header>
            <TopBar>
                <Link to="/">
                    <img src={backIcon} alt="voltar" />
                </Link>
                <img src={logoImg} alt="Proffy" />
            </TopBar>
            <Content>
                <strong>{props.title}</strong>
                {
                    props.description && <p>{props.description}</p>
                }
                {props.children}
            </Content>
        </Header>
    )
}

export default PageHeader;