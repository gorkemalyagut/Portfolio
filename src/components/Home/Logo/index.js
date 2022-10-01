import LogoS from '../../../assets/images/logo-g.png'
import './index.scss'

const Logo = () => {

  return (
    <div className="logo-container" >
      <img
        className="solid-logo"
        src={LogoS}
        alt="Flutter,  Developer"
      />
      <svg
        className='svg-container'
        width="500pt"
        height="585pt"
        version="1.1"
        viewBox="0 0 500 499"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          transform="translate(0.000000,457.000000) scale(0.100000,-0.100000)"
          fill="none"
        >
          <path
            d="M2505 4950 c-11 -4 -56 -10 -100 -13 -76 -6 -138 -21 -355 -81 -272 -76 -512 -182 -744 -330 -584 -374 -1016 -934 -1189 -1541 -69 -240 -81 -338 -81 -640 0 -214 3 -291 17 -370 180 -1024 816 -1700 1752 -1862 127 -22 497 -24 630 -5 504 76 932 284 1321 645 l121 112 208 835 c114 459 209 844 212 856 5 22 -6 26 -187 70 -36 8 -101 24 -145 35 -44 10 -255 63 -469 117 -238 60 -390 94 -392 88 -2 -6 -75 -299 -164 -651 -88 -352 -162 -649 -166 -661 -12 -43 -227 -153 -375 -193 -190 -50 -369 -47 -538 10 -155 52 -301 161 -390 292 -113 166 -192 408 -207 637 -11 159 38 373 123 545 142 288 416 560 708 704 184 91 314 129 520 152 470 50 1036 -158 1422 -524 l62 -59 428 432 c235 238 429 436 431 441 5 13 -83 103 -183 187 -467 392 -934 610 -1615 753 -125 27 -391 36 -525 20 -62 -8 -100 -9 -104 -3 -3 5 -15 6 -26 2z m598 -35 c97 -17 394 -91 527 -132 433 -132 879 -393 1221 -713 l80 -75 -406 -405 c-223 -223 -408 -413 -411 -422 -6 -20 0 -24 -91 60 -245 227 -588 400 -938 473 -95 20 -138 23 -325 23 -232 0 -314 -12 -487 -69 -80 -26 -94 -32 -197 -81 -147 -68 -362 -236 -488 -380 -226 -258 -336 -519 -345 -819 -4 -124 -2 -155 22 -269 46 -221 125 -398 237 -528 103 -119 222 -195 385 -245 79 -24 104 -27 248 -27 138 -1 172 3 250 23 115 31 230 79 325 137 71 43 77 48 91 97 9 29 85 328 170 665 112 449 157 612 167 612 20 0 1081 -268 1110 -280 24 -10 30 -56 13 -89 -6 -10 -89 -330 -185 -712 -97 -382 -186 -736 -199 -788 -20 -78 -30 -98 -59 -125 -309 -280 -445 -376 -710 -505 -132 -64 -420 -166 -444 -157 -8 3 -14 2 -14 -3 0 -5 -51 -18 -112 -30 -543 -103 -1082 3 -1533 304 -459 306 -788 825 -904 1428 -40 207 -46 262 -44 462 1 296 35 495 128 765 78 224 251 537 392 711 21 26 59 73 85 105 68 84 308 318 408 398 287 228 645 412 966 497 65 17 126 34 134 37 50 18 193 42 305 52 72 6 162 15 200 20 95 12 320 4 428 -15z"
          />
          <path />
        </g>
      </svg>
    
    </div>


  )
}

export default Logo
