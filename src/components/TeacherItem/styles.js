import styled from 'styled-components';

export const TeacherArticle = styled.article`
    background: var(--color-box-base);
    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;
    margin-top: 2.4rem;
    overflow: hidden;

    & header {
        padding: 3.2rem 2rem;
        display: flex;
        align-items: center;

        @media (min-width: 700px) {
            padding: 3.2rem;
        }
    }

    & header img {
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
    }

    & header div {
        margin-left: 2.4rem;
    }

    & header div strong {
        font: 700 2.4rem Archivo;
        display: block;
        color: var(--color-text-title);
    }

    & > p {
        padding: 0 2rem;
        font-size: 1.6rem;
        line-height: 2.8rem;

        @media (min-width: 700px) {
            padding: 0 3.2rem;
        }
    }

    & footer {
        padding: 3.2rem 2rem;
        background: var(--color-box-footer);
        border-top: 1px solid var(--color-line-in-white);
        margin-top: 3.2rem;
        display: flex;
        align-items: conent;
        justify-content: space-between;

        @media (min-width: 700px) {
            padding: 3.2rem;
        }
    }

    & footer p strong {
        color: var(--color-primary);
        font-size: 1.6rem;
        display: block;

        @media (min-width: 700px) {
            display: initial;
            margin-left: 1.8rem;
        }
    }

    & footer a {
        width: 20rem;
        height: 5.6rem;
        background: var(--color-secundary);
        color: var(--color-button-text);
        border: 0;
        border-radius: 0.8rem;
        cursor: pointer;
        font: 700 1.4rem Archivo;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        transition: 0.2s;
        text-decoration: none;

        @media (min-width: 700px) {
            width: 24.5rem;
            font-size: 1.6rem;
            justify-content: center;
        }
    }

    & footer a img {
        @media (min-width: 700px) {
            margin-right: 1.2rem;
        }
    }

    & footer a:hover {
        background: var(--color-secundary-dark);
    }

    & header div span {
        font-size: 1.6rem;
        display: block;
        margin-top: 0.4rem;
    }
`;