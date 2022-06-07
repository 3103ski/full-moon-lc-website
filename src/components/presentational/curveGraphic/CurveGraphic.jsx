// --> React
import React from 'react';

// --> Project Imports
import { curveGraphicBottomLG, curveGraphicTopLG } from '../../../assets';

// --> Local Styling
import style from './curveGraphic.module.scss';

export default function BGCurve({ pos = 'top' }) {
	if (pos === 'bottom')
		return <img className={style.Graphic} data-pos={pos} src={curveGraphicBottomLG} alt='Curvey Layout Graphic' />;
	return <img className={style.Graphic} data-pos={pos} src={curveGraphicTopLG} alt='Curvey Layout Graphic' />;
}
