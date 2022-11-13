import { GraphQLClient, gql } from 'graphql-request';

// const hygraph = new GraphQLClient('https://api-sa-east-1.hygraph.com/v2/cla4l82233p5v01uk9nzlhcy6/master', {
//   headers: {
//     Authorization:
//       `Bearer ${process.env.GRAPHCMS_TOKEN}`
//   }
// });

const hygraph = new GraphQLClient(
  'https://api-sa-east-1.hygraph.com/v2/cla4l82233p5v01uk9nzlhcy6/master'
);


const Home = ({data}) => {
  console.log('Data is', data);
  return <div>Home</div>;
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