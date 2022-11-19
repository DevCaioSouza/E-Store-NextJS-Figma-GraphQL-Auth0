import { GraphQLClient, gql } from 'graphql-request';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';
import ListItemFake from './ListItemFake';

const graphcms = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT, {
  headers: {
    Authorization:
      `Bearer ${process.env.NEXT_PUBLIC_GRAPHCMS_TOKEN}`
  }
});

const query = gql`
  {
  cPUs {
    id
    slug
    title
    brand
  }
  gPUs {
    id
    slug
    title
    brand
  }
  laptops {
    id
    slug
    title
    brand
  }
  motherboards {
    id
    slug
    title
    brand
  }
  storage_Equipment {
    id
    slug
    title
    brand
  }
}
`


const StyledMenu = styled.div`
  background-color: lightblue;
  
  .menuSection{
    min-width: 14.5rem;
    max-width: 14.5rem;
    margin-bottom: 2rem;
    p{
      padding: 0.2rem 0 0.2rem 0.8rem;
      border: solid 1px #d3dce5;
      background-color: #e9edf2;
      margin: 0;
      :hover{
        cursor: pointer;
        background-color: #c3ced9;
        border-color: #d1dfed;
      }
    }
    .menuTitleSection {
      .menuTitle{
        background-color: #004695;
        text-align: center;
        border-radius: 6px 6px 0 0;

        .titleSection{
          h3{
            color: #e9edf2;
            font-weight: 350;
            letter-spacing: 0.05rem;
            padding: 0.3rem 0;
            margin-bottom: 0;
          }
        }
      }
    }
  }
`

const MenuList = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    async function getMenuItems(){
      const data = await graphcms.request(query)
      setData(data)
    }
    getMenuItems()
  }, [])

  console.log("data is", data)

  return (
    <StyledMenu>
      <div className='menuOnLeft'>
        <div className='menuSection'>
          <div className='menuTitleSection'>
            <div className='menuTitle'>
              <div className='titleSection'>
                <h3>Products</h3>
              </div>
            </div>
          </div>
          <div>
            <Link href="/">
              <p>New & Promo Products</p>
            </Link>
          </div>

          <ListItemFake />
        </div>
      </div>
    </StyledMenu>
  )
}

export default MenuList