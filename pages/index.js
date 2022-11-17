import { GraphQLClient, gql } from 'graphql-request';
import TopBar from '../components/productSection/TopBar';
import styled from 'styled-components';
import MenuList from '../components/menuList/MenuList';

const hygraph = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT, {
  headers: {
    Authorization:
      `Bearer ${process.env.GRAPHCMS_TOKEN}`
  }
});

const HomeStyle = styled.div`
  display: flex;
  gap: 5%;
  padding: 0 10%;

  .mainProductSection{
    width: 100%;
  }
`

const Home = ({ data }) => {
  console.log('Data is', data);
  return (
    <HomeStyle>
      <div className='menu'>
        <MenuList />
      </div>
      <div className='mainProductSection'>
        <TopBar />
        <div className='productCardsLayout'>Home</div>
      </div>
    </HomeStyle>
  )
};

export default Home;

const MyQuery = gql`
{
  cPUs(where: {OR: [{newProduct: true}, {promotion: true}]}) {
    id
    discountPercent
    images {
      url
    }
    newProduct
    onDiscount
    price
    promotion
    slug
    title
    subtitle
  }
  gPUs(where: {OR: [{newProduct: true}, {promotion: true}]}) {
    id
    discountPercent
    images {
      url
    }
    newProduct
    onDiscount
    price
    promotion
    slug
    title
    subtitle
  }
  laptops(where: {OR: [{newProduct: true}, {promotion: true}]}) {
    id
    discountPercent
    images {
      url
    }
    newProduct
    onDiscount
    price
    promotion
    slug
    title
    subtitle
  }
  motherboards(where: {OR: [{newProduct: true}, {promotion: true}]}) {
    id
    discountPercent
    images {
      url
    }
    newProduct
    onDiscount
    price
    promotion
    slug
    title
    subtitle
  }
  storage_Equipment(where: {OR: [{newProduct: true}, {promotion: true}]}) {
    id
    discountPercent
    images {
      url
    }
    newProduct
    onDiscount
    price
    promotion
    slug
    title
    subtitle
  }
}

`

export async function getServerSideProps() {
  const data = await hygraph.request(MyQuery)

  return {
    props: {
      data: data,
    }
  }
}