import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.footer.bgColor};
  padding: 20px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.footer.primary}; 
  border-radius: ${({ theme }) => theme.footer.borderRadius}; 
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: ${({ theme }) => theme.footer.primary};
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.footer.over};
      opacity: ${({ theme }) => theme.footer.opacity};
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante
        {' '}
        a
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
