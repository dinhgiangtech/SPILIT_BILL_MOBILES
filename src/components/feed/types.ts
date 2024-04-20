export type FeedItemProps = {
  id?: number | undefined;
  image?: string;
  groupName: string;
  data: {friendName: string, amount: number}[];
}

export type FeedProps = {
  total: number;
  data: FeedItemProps[];
}
