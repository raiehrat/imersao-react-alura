import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    background-color: ${({ theme }) => theme.quizAlternative.colorBase};
    color: ${({ theme }) => theme.quizAlternative.colorTextBase};

    &[data-selected="true"] {
      background-color: ${({ theme }) => theme.quizAlternative.colorSelect};
      color: ${({ theme }) => theme.quizAlternative.colorTextSelect};
      
      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.quizAlternative.success};
      }
      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.quizAlternative.wrong};
      }
    }
    &:focus {
      opacity: 0.8;
    } 
  }
  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;