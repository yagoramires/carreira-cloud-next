import React from 'react';
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import { RichText } from 'prismic-dom';
import Head from 'next/head';

import styles from './post.module.scss';
import { getPrismicClient } from '../../services/prismic';

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} | Carreira Cloud</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className={styles.postContent}
          ></div>
        </article>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: any) => {
  const { slug } = params;

  const prismic = getPrismicClient();

  const response = await prismic.getByUID<any>('post', String(slug), {});

  const post = {
    slug: response.uid,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      },
    ),
  };

  return {
    props: { post },
  };
};
