import * as yo from 'yo-yo'
import * as svg from '../../lib/fg/svg'

export default function render () {
  return svg.render(`
<svg class="icon folder" width="45px" height="37px" viewBox="0 0 45 37" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <filter x="-8.5%" y="-7.6%" width="117.1%" height="121.2%" filterUnits="objectBoundingBox" id="filter-1">
            <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"/>
            <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.45 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"/>
            <feMerge>
                <feMergeNode in="shadowMatrixOuter1"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
        <linearGradient x1="50%" y1="138.288762%" x2="50%" y2="0%" id="linearGradient-2">
            <stop stop-color="#FFF5D9" offset="0%"/>
            <stop stop-color="#F7E5A1" offset="100%"/>
        </linearGradient>
        <rect id="path-3" x="0" y="7" width="41" height="26" rx="2"/>
        <path d="M14,4 L39,4 C40.1045695,4 41,4.8954305 41,6 L41,8 L0,8 L0,4.5 L0,2 L0,2 C-1.3527075e-16,0.8954305 0.8954305,2.02906125e-16 2,0 L2,0 L9.52786405,0 L9.52786405,8.8817842e-16 C11.0429523,6.09861226e-16 12.4280048,0.856009505 13.1055728,2.21114562 L14,4 Z" id="path-4"/>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="folder-color" filter="url(#filter-1)" transform="translate(2.000000, 1.000000)">
            <g id="Rectangle-16">
                <use fill="url(#linearGradient-2)" fill-rule="evenodd" xlink:href="#path-3"/>
                <rect stroke="#D4C17F" stroke-width="1" x="0.5" y="7.5" width="40" height="25" rx="2"/>
            </g>
            <g id="Combined-Shape">
                <use fill="#FFECAD" fill-rule="evenodd" xlink:href="#path-4"/>
                <path stroke="#D4C17F" stroke-width="1" d="M0.5,7.5 L40.5,7.5 L40.5,6 C40.5,5.17157288 39.8284271,4.5 39,4.5 L13.690983,4.5 L12.6583592,2.43475242 C12.0654872,1.24900832 10.8535662,0.5 9.52786405,0.5 L2,0.5 C1.17157288,0.5 0.5,1.17157288 0.5,2 L0.5,7.5 Z"/>
            </g>
        </g>
    </g>
</svg>
  `)
}