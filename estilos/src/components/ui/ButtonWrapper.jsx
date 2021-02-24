import styled from 'styled-components';

// Aqui no hace falta un componente funcional
// es solo presentacional
// styled comps function me devuelve ya un componente, div en este caso

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: ${({ page }) => {
    if(page === 'primera') return 'flex-end';
    else if(page === 'media') return 'space-between';
    else return 'flex-start';
  }};
`