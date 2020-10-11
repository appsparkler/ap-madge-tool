'use babel'

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import useSVGWrapper from './useSVGWrapper'

const setScale = ({scale}) => scale

const StyledSVGWrapper = styled.div`
  scale: ${setScale};
`;

const SVGWrapper = ({svg}) => {
    const {
      svgWrapperRef, style,
      handlePlusClick, handleMinusClick
    } = useSVGWrapper({svg, style});
    return (<div>
      <div class='btn-group'>
        <button class='btn btn-error icon icon-dash' onClick={handlePlusClick}></button>
        <button class='btn btn-success icon icon-plus' onClick={handleMinusClick}></button>
      </div>
      <div style={{maxWidth: '100%', overflow: 'auto', minHeight: '80%'}}>
        <StyledSVGWrapper ref={svgWrapperRef} scale={style.scale} />
      </div>

    </div>)
}

SVGWrapper.propTypes = {
  svg: PropTypes.string
};

export default React.memo(SVGWrapper);
