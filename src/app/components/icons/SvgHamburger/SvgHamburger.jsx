

export default function SvgHamburger({
    color,
    width = 24,
    height = 24
}) {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
            <path d="M3 17H21M3 12H21M3 7H21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}