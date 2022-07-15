import { Client } from 'faunadb';

export const fauna = new Client({
  secret: `${process.env.NEXT_PUBLIC_FAUNA_DB_KEY}`,
});
