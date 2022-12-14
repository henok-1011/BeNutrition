import { graphql } from 'graphql'
import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async() => {
    const query = gql `
        query MyQuery {
  postsConnection {
    edges {
      node {
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
      }
    }
  }
}

`

    const result = await request(graphqlAPI, query)

    return result.postsConnection.edges
}

export const getSimilarPosts = async(slug) => {
    const query = gql `
    query GetPostDetails($slug: String!) {
      posts(
        where: {slug_not: $slug,}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
    const result = await request(graphqlAPI, query, { slug });

    return result.posts;
};



export const submitComment = async(obj) => {
    const result = await fetch('/api/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    });

    return result.json();
};

export const getComments = async(slug) => {
    const query = gql `
    query GetComments($slug:String!) {
      comments(where: {post: {slug:$slug}}){
        name
        createdAt
        comment
      }
    }
  `;

    const result = await request(graphqlAPI, query, { slug });

    return result.comments;
};

export const getPostDetails = async(slug) => {
    const query = gql `
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
        excerpt
        featuredImage {
          url
        }
        author{
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        
      }
    }
  `;

    const result = await request(graphqlAPI, query, { slug });

    return result.post;
};

export const getRecentPosts = async() => {
    const query = gql `
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        title
        excerpt
        featuredImage {
          url
        }
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        createdAt
        slug
      }
    }
  `;
    const result = await request(graphqlAPI, query);

    return result.posts;
};