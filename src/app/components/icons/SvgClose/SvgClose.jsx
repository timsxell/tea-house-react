import styles from './styles.module.css'


export default function SvgClose({
    width = 50,
    height = 50,
    handleClick,
}) {

    //style={{backgroundColor: 'red'}}
    return (
        <svg onClick={handleClick} className={styles.svg} width={width} height={height} viewBox="0 0 50 50" fill="none"  xmlns="http://www.w3.org/2000/svg">
            <g id="Menu / Close_LG">
                <rect x="0.5" y="0.5" width="49.0001" height="49.0001" rx="24.5" stroke="black" className={styles.circle}/>
                <path id="Vector" d="M34 34L25 25M25 25L16 16M25 25L34.0001 16M25 25L16 34.0001" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
        </svg>
    )
}
