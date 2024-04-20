import {observer} from 'mobx-react';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Feed from "@/containers/feed/Feed";
import {Styles} from "@/theme";
import FeedBody from "@/components/feed/FeedBody";
import {FeedProps} from "@/components/feed/types";

const sampleData: FeedProps = {
  total: 2,
  data: [
    {
      id: 1,
      image: 'NG',
      groupName: 'Group 1',
      data: [
        { friendName: 'Friend 1', amount: 10 },
        { friendName: 'Friend 2', amount: 20 },
      ],
    },
    {
      id: 2,
      image: "GN",
      groupName: 'Group 2',
      data: [
        { friendName: 'Friend 3', amount: 30 },
        { friendName: 'Friend 4', amount: 40 },
      ],
    },
    {
      id: 3,
      image: "GN",
      groupName: 'Group 3',
      data: [
        { friendName: 'Friend 3', amount: 30 },
        { friendName: 'Friend 4', amount: 40 },
      ],
    },
    {
      id: 4,
      image: "GN",
      groupName: 'Group 4',
      data: [
        { friendName: 'Friend 3', amount: 30 },
        { friendName: 'Friend 4', amount: 40 },
      ],
    },
    {
      id: 5,
      image: "GN",
      groupName: 'Group 5',
      data: [
        { friendName: 'Friend 3', amount: 30 },
        { friendName: 'Friend 4', amount: 40 },
      ],
    },
    {
      id: 6,
      image: "GN",
      groupName: 'Group 6',
      data: [
        { friendName: 'Friend 3', amount: 30 },
        { friendName: 'Friend 4', amount: 40 },
      ],
    },
  ],
};

const Home = observer(() => {
  return (
    <View>
      <Feed></Feed>
      <FeedBody total={sampleData.total} data={sampleData.data}></FeedBody>
    </View>
  );
});

export default Home;

const styles = StyleSheet.create({
  txtTitle: {
    ...Styles.typography.heading.h1_medium,
  },
});
