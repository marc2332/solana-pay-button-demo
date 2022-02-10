import styles from '../styles/Home.module.css'

export default function SolanaPayButton({ children, uri }) {
    return (
        <a href={uri}>
            <button className={styles.solanaPayButton}>
                {children}
                <img width={65} src="/solana-pay.svg"></img>
            </button>
        </a>
    )
}