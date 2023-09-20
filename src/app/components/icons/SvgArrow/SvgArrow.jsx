export default function SvgArrow({
    isOpen
}){
    return (isOpen
                ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 15.0002L12 9.00024L6 15.0002" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 15.0002L12 9.00024L6 15.0002" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" transform="rotate(180 12 12)"/>
                </svg>)
}