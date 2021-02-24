import styled, { css } from 'styled-components';

const ButtonStyled = styled.button`
  width: 200px;
  height: auto;
  padding: 10px 20px;
  margin: 20px;
  font-size: 22px;
  border: none;
  border-radius: 5px;
  /* background-color: ${props => props.info ? 'blue' : '#e61ae6'}; */
  background-color: #e61ae6;
  color: white;
  display: block;
  margin: ${({ margin }) => margin || '20px'};

  /* ${({ info }) => {
    if(info) {
      return css`
        background-color: blue;
      `
    }
  }} */

  // OTRA FORMA
  ${({ info }) =>
  info &&
      css`
        background-color: blue;
        /* background-color: ${props => props.bgColor}; */
      `
  }

  &:hover {
    background-color: paleturquoise;
    color: black;
  }

  /* TERMINA LO DEL MARGIN */
`

// const OtherButton = styled(ButtonStyled)`
//   font-size: 40px;
//   color: black;
// `

function Button({ children, info, bgColor, margin }) {
  return(
    <div>
      <ButtonStyled
        info={info}
        bgColor={bgColor}
        margin={margin}
      >
        {children}
      </ButtonStyled>
      {/* <OtherButton>{children}</OtherButton> */}
    </div>

  );
}

export default Button;