import React from 'react';
import styles from './Footer.module.css';
import { ReactComponent as Dogs } from '../Assets/dogs-footer.svg'

const Footer = () => {
    return <footer className={styles.footer}>
        <Dogs />
        <p>Dogs © 2022. Feito com ❤️ por Enderson.</p>
    </footer>
}

export default Footer;