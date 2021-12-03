import styled from 'styled-components';
import { css } from 'styled-components/macro';

const fruits = ['orange', 'apple', 'bananas', 'peach'];

const Item = styled.li`
    list-style: none;
    ${({ odd }) => {
        return odd
            ? css`
                  color: white;
                  background: red;
                  font-size: 1.5rem;
                  padding: 1.5rem;
              `
            : css`
                  color: #222;
                  padding: 1rem;
              `;
    }}
`;

const List = () => {
    return (
        <ul>
            {fruits.map((item, index) => (
                <Item key={index} odd={(index + 1) % 2 !== 0}>
                    {item}
                </Item>
            ))}
        </ul>
    );
};

export default List;
