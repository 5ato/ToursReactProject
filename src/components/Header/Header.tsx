import styles from './Header.module.css';
import HeaderNavbar from './HeaderNavbar';
import HeaderTopPhone from './HeaderTopPhone';
import UpperHeader from './UpperHeader';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__info}>
                <UpperHeader/>
                <HeaderTopPhone/>
            </div>
            <HeaderNavbar/>
        </header>
    )
}