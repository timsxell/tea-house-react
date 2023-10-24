export default function SvgChevron({
    width = 24,
    height = 24,
    pointTo = 'right'
}) {

    if(pointTo === 'right'){
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
                <path d="M9 5L16 12L9 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    }

    else if(pointTo === 'left'){
        return (
            <svg style={{ transform: 'rotate(180deg)' }} xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
                <path d="M9 5L16 12L9 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    }

    
}