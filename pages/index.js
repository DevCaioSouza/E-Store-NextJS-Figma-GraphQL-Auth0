import { GraphQLClient } from 'graphql-request';
const hygraph = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT,  {
    headers: {
      Authorization: 
      `Bearer ${process.env.GRAPHCMS_TOKEN}`
    }
  }
);


const Home = () => {
  return <div>Home</div>
};

export default Home;



export async function getServerSideProps(){
  const data = await graphcms.request(MyQuery)

  return {
    props: {
      data: data,
    }
  }
}