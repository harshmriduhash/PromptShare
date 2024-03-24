import classNames from 'clsx';

const LogoImage = ({ className }) => {
  return (
    <svg
      width="66px"
      height="66px"
      viewBox="0 0 66 66"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={classNames('w-[45px] sm:w-[45px]', className)}
    >
      <defs>
        <filter
          x="-3.1%"
          y="-1.6%"
          width="106.2%"
          height="106.2%"
          filterUnits="objectBoundingBox"
          id="filter-1"
        >
          <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
          <feColorMatrix
            values="0 0 0 0 0.750707654   0 0 0 0 0.750707654   0 0 0 0 0.750707654  0 0 0 0.5 0"
            type="matrix"
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient
          cx="50%"
          cy="0%"
          fx="50%"
          fy="0%"
          r="100%"
          id="radialGradient-2"
        >
          <stop stopColor="#061B33" offset="0%" />
          <stop stopColor="#040519" offset="100%" />
        </radialGradient>
      </defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Artboard" transform="translate(-589, -63)" stroke="#FFFFFF">
          <g id="stripe-succesfull-svg" filter="url(#filter-1)" transform="translate(590, 63)">
          <g id="Prototyper">
                    <rect id="Rectangle" strokeWidth="1.05" fill="url(#radialGradient-2)" x="0.525" y="0.525" width="62.95" height="62.95" rx="31.475"></rect>
                    <g id="puzzle" transform="translate(13.5652, 14.2609)" strokeWidth="2.625">
                        <path d="M20.9296004,6.62664757 C20.9296004,6.01354882 21.2540092,5.45916939 21.6289979,4.97041744 C22.0144514,4.46957622 22.2377004,3.87547489 22.2377004,3.23819761 C22.2377004,1.44898549 20.4813582,0 18.3134004,0 C16.1454426,0 14.3891003,1.45071253 14.3891003,3.23819761 C14.3891003,3.87547489 14.6123494,4.46957622 14.9978029,4.97041744 C15.3727915,5.45916939 15.6972003,6.01354882 15.6972003,6.62664757 L15.6972003,6.62664757 C15.6987235,6.92584887 15.5776809,7.21287928 15.3617283,7.42215866 C15.1457757,7.63143803 14.8533647,7.74508492 14.5513047,7.73713348 C12.12463,7.66791339 9.70210145,7.49504877 7.29047748,7.21902186 C7.61488628,10.0047353 7.80150857,12.8318977 7.8398795,15.6936009 C7.84314815,15.9967634 7.72356838,16.288575 7.50788687,16.5037654 C7.29220538,16.7189558 6.99841906,16.8395691 6.69223974,16.8386275 L6.69223974,16.8386275 C6.07307239,16.8386275 5.51320558,16.5173983 5.01961584,16.146085 C4.51969874,15.759422 3.90458618,15.5474876 3.27025006,15.5433485 C1.4633279,15.5433485 0,17.2824765 0,19.4291857 C0,21.5758947 1.46507203,23.3150228 3.27025006,23.3150228 C3.91383529,23.3150228 4.51381715,23.0939617 5.01961584,22.7122863 C5.51320558,22.3409728 6.07307239,22.0197437 6.69223974,22.0197437 L6.69223974,22.0197437 C7.23292108,22.0197437 7.66023376,22.4687737 7.6201187,23.0041557 C7.40317413,25.9323603 7.02940371,28.8470972 6.50038507,31.7360635 C9.14797952,32.0642009 11.8339449,32.2697186 14.5513047,32.3474352 C14.8533647,32.3553867 15.1457757,32.2417398 15.3617283,32.0324604 C15.5776809,31.8231811 15.6987235,31.5361507 15.6972003,31.2369494 L15.6972003,31.2369494 C15.6972003,30.6238507 15.3727915,30.0694712 14.9978029,29.5807192 C14.6073126,29.085702 14.3932804,28.4766182 14.3891003,27.8484994 C14.3891003,26.0610144 16.1471867,24.6103017 18.3134004,24.6103017 C20.4813582,24.6103017 22.2377004,26.0610144 22.2377004,27.8484994 C22.2377004,28.4857766 22.0144514,29.079878 21.6289979,29.5807192 C21.2540092,30.0694712 20.9313446,30.6238507 20.9313446,31.2369494 L20.9313446,31.2369494 C20.9313446,31.8120533 21.4144695,32.2714455 21.9952659,32.2386318 C25.1686731,32.0538219 28.3289067,31.6905581 31.4606777,31.1505975 C31.9345429,28.4533598 32.2733191,25.7345541 32.4757634,23.0041557 C32.4942173,22.7490213 32.4044256,22.4978183 32.2279925,22.3109868 C32.0515594,22.1241552 31.8044575,22.0186093 31.5461403,22.0197437 L31.5461403,22.0197437 C30.9269729,22.0197437 30.3671061,22.3409728 29.8735163,22.7122863 C29.3677176,23.0939617 28.7677357,23.3150228 28.1241505,23.3150228 C26.3189725,23.3150228 24.8539006,21.5758947 24.8539006,19.4291857 C24.8539006,17.2824765 26.3189725,15.5433485 28.1241505,15.5433485 C28.76948,15.5433485 29.3677176,15.7644095 29.8735163,16.146085 C30.3671061,16.5173983 30.9269729,16.8386275 31.5478844,16.8386275 L31.5478844,16.8386275 C31.8540637,16.8395691 32.14785,16.7189558 32.3635315,16.5037654 C32.5792131,16.288575 32.6987927,15.9967634 32.6956522,15.6936009 C32.6535945,12.5985102 32.4381531,9.50811178 32.0501948,6.43667332 C28.7607593,7.02732056 25.4050467,7.42799354 21.9935217,7.626603 C21.7160154,7.64184291 21.4444664,7.54296096 21.2430476,7.35332517 C21.041629,7.16368938 20.9282123,6.90012587 20.9296004,6.62492054 L20.9296004,6.62492054 L20.9296004,6.62664757 Z" id="Path"></path>
                    </g>
                </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default LogoImage;