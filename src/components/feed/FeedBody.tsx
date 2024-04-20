import React from "react";
import {FlatList, ScrollView, StyleSheet, Text, View} from "react-native";
import {FeedProps} from "@/components/feed/types";
import IconHeaderFeed from '@/assets/images/IconHeaderFeed.svg';
import COLORS from "@/theme/colors";
import FeedItem from "@/components/feed/FeedItem";

const FeedBody = ({total, data}: FeedProps) => {
  return (
    <View style={styles.Container}>
      {/*<View style={styles.Header}>*/}
      {/*  <Text style={styles.HeaderText}>Tất cả bạn nợ {total}</Text>*/}
      {/*  <IconHeaderFeed width={18} height={16}></IconHeaderFeed>*/}
      {/*</View>*/}
      {/*<View>*/}
      {/*  <FlatList*/}
      {/*    style={styles.Item}*/}
      {/*    data={data}*/}
      {/*    renderItem={({item}) => <FeedItem key={item.id} image={item.image} groupName={item.groupName} data={item.data}/>}*/}
      {/*    keyExtractor={(item) => item.groupName}*/}
      {/*  />*/}
      {/*</View>*/}
      <ScrollView style={styles.Item}>
        {
          data.map(item => (
            <FeedItem key={item.id} image={item.image} groupName={item.groupName} data={item.data}/>
          ))
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: COLORS.neutral.white.W900,
    marginTop: 5,
    flex: 1
  },
  BodyFeed: {

  },
  Header: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 45,
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16
  },
  Item: {
    backgroundColor: "red",
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1
  },
  RightIcon: {
    color: COLORS.neutral.black.B900
  },
  HeaderText: {
    color: COLORS.neutral.black.B900
  }
})
export default FeedBody;
