import styled from "styled-components";

export const StreamCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px 0;
  margin: ${(props) => (props.margin ? props.margin : 0)};
  a {
    width: 100%;
    height: 100%;
    min-height: 150px;
    max-height: 200px;
    article {
      display: flex;
      width: 100%;
      height: 100%;
      .image {
        width: 55%;
        margin: 0;
      }
      .live-data {
        width: 100%;
        margin-left: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      img {
        width: 100%;
        height: 100%;
      }
      div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        width: 45%;
        margin: 0 0 0 15px;
        color: #fff;
        h3 {
          text-align: left;
          font-size: 0.8rem;
          margin-bottom: 10px;
        }
        .viewers {
          font-size: 0.7rem;
          opacity: 0.7;
          margin-bottom: 10px;
        }
        .status {
          width: 100px;
          margin-left: 0;
          button {
            font-weight: 600;
            font-size: 0.9rem;
            text-transform: capitalize;
            color: var(--purpleColorText);
            width: 100%;
            padding: 5px 0;
            border: 2px solid transparent;
            border-radius: 3px;
            &.live {
              background: linear-gradient(
                    var(--backgroundColor),
                    var(--backgroundColor)
                  )
                  padding-box,
                linear-gradient(to right, var(--purpleColor), #1884f7)
                  border-box;
            }

            &.upcoming,
            &.past {
              background: linear-gradient(
                    var(--backgroundColor),
                    var(--backgroundColor)
                  )
                  padding-box,
                linear-gradient(to right, var(--purpleColor), #1884f7)
                  border-box;
              color: #b0acad;
            }
          }
        }
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    a {
      min-height: 220px;
      max-height: 300px;
      article {
        margin-bottom: 1.5em;
        div {
          .live-data {
            flex-direction: column;
            align-items: flex-start;
            .viewers:last-child {
              margin-top: 20px;
            }
          }
          .viewers {
            font-size: 1rem;
          }
          h3 {
            font-size: 1.1rem;
          }
          .status {
            button {
              font-size: 1rem;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px 20px;

    a {
      min-height: 180px;
      max-height: 220px;
      article {
        div {
          .live-data {
            .viewers:last-child {
              margin-top: 0px;
            }
          }
          .viewers {
            font-size: 1rem;
          }
          h3 {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media (min-width: ${({ theme }) => theme.mediaQuery.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    a {
      min-height: 150px;
      max-height: 180px;
      article {
        .image {
          overflow: hidden;
        }
        div {
          .viewers {
            font-size: 0.9rem;
          }
          h3 {
            font-size: 0.9rem;
          }
        }
      }
      :hover {
        img {
          transform: scale(1.1);
          transition: 0.3s ease;
        }
        .status {
          .live {
            color: var(--purpleColor);
            transition: 0.3s ease;
          }
          .upcoming,
          .past {
            color: var(--purpleColorText);
            transition: 0.3s ease;
          }
        }
      }
    }
  }
`;
