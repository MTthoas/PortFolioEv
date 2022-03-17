import React from "react";
import styled from "styled-components"

const TopSectionContainer = styled.div`
    position : absolute;
    width: 100%;
    height: 0;
    top: 0;
    left:0;
    // background-color:#DF6450;
    display: flex;
    flex-direction : column;
    align-items : left;
    padding-top:07%;
    z-index:99;
    padding-left:05%;
`;

const Logo = styled.h1`
    margin: 0;
    color: white;
    font-weight: 700;
    font-size:55px;
`;

const Slogan = styled.div`
    margin: 0;
    color: white;
    font-weight: 700;
    font-size:30px;
    margin-top:1em;
`;

export function TopSection(){
    return(
        <>
    <TopSectionContainer>
        <Logo>Hi, I'm Matthias</Logo>
        <Slogan> Developer Web </Slogan>
        <button class="button-28" role="button">Contact me !</button>
    </TopSectionContainer>
      </>
    )};

