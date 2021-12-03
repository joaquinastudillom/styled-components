import styled from 'styled-components';

const StyledCard = styled.article`
    width: 90vw;
    max-width: 300px;
    background: var(--white);
    border-radius: 0.25rem;
    transition: all 0.5s ease-in-out;

    &:hover {
        box-shadow: 0 3px 3px #222;
        cursor: pointer;
    }

    img {
        width: 100%;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 2rem;

        h4 {
            text-transform: capitalize;
        }

        p {
            color: var(--primary);
            font-weight: 700;
        }
    }

    @media (min-width: 768px) {
        max-width: 600px;
    }
`;

const Card = () => {
    return (
        <StyledCard>
            <img
                src='https://dl.airtable.com/.attachmentThumbnails/954dfa5c8ce3df84a3c7254481464366/a3bd8c4a'
                alt='product card'
            />
            <footer>
                <h4>product name</h4>
                <p>$20</p>
            </footer>
        </StyledCard>
    );
};

export default Card;
