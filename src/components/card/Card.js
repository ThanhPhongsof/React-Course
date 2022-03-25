import React from "react";
import styled, { css } from "styled-components";

const StyledCard = styled.div`
  position: relative;
`;

const CardImage = styled.div`
  height: 400px;
  max-width: 100%;
  border-radius: 8px;
`;

const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;

const CardContent = styled.div`
  position: absolute;
  left: 50%;
  width: calc(100% - 36px);
  transform: translate(-50%, 50%);
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
  bottom: 0;
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const CardUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  object-fit: cover;
  flex-shrink: 0;
`;

const UserName = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: #333;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.colors.blue};;
`;

const CardAmout = styled.span`
  font-size: ${(props) => props.fontSize || "18px"};
  font-weight: bold;
  ${(props) =>
    props.secondary &&
    css`
      background: linear-gradient(86.88deg, #20e3b2, #2cccff);
    `};
  ${(props) =>
    !props.secondary &&
    css`
      background: linear-gradient(
        86.88deg,
        #7d6aff 1.38%,
        #ffb86c 64.35%,
        #fc2872 119.91%
      );
    `};

  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const Card = (props) => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg
          src="https://cdn.dribbble.com/users/2400293/screenshots/16199819/media/da37d2697adeab224a21b8b85a0ed225.png?compress=1&resize=1200x900&vertical=top"
          alt=""
        ></CardImg>
      </CardImage>
      <CardContent>
        <CardTop>
          <CardUser>
            <UserAvatar
              src="https://cdn.dribbble.com/users/2400293/screenshots/17040958/media/4962f801be5fbfd65d807df3f7eff4ae.png?compress=1&resize=1200x900&vertical=top"
              alt=""
            ></UserAvatar>
            <UserName>@zndrson</UserName>
          </CardUser>
          <CardMeta>
            <img src="/icon-heart.svg" alt="heart"></img>
            <span>256</span>
          </CardMeta>
        </CardTop>
        <CardFooter>
          <CardTitle>Cosmic Perspective</CardTitle>
          <CardAmout secondary={props.secondary} fontSize="22px">
            12,000 PSL
          </CardAmout>
        </CardFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
