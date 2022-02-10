import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function SolanaPayButton({ children, uri }) {
    return (
        <a href={uri}>
            <button className={styles.solanaPayButton}>
                {children}
                <Image  width={85} height={0} src="/solana-pay.svg"></Image>
            </button>
        </a>
    )
}