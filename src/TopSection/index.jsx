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
    align-items : center;
    padding-top:45%;
    z-index:99;
`;

const Logo = styled.h1`
    margin: 0;
    color: #fff;
    font-weight: 700;
    font-size:55px;
`;

const Slogan = styled.div`
    margin: 0;
    color: #fff;
    font-weight: 700;
    font-size:30px;
    margin-top:1em;
`;

export function TopSection(){
    return(
    <TopSectionContainer>
        <Logo>PECQUERY MATTHIAS</Logo>
        <Slogan> Développeur </Slogan>
    </TopSectionContainer>
    )};

