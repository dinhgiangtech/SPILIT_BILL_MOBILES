import React from "react";
import {StyleSheet, View, Text} from "react-native";
import {FeedItemProps} from "@/components/feed/types";
import {Styles} from "@/theme";
import COLORS from "@/theme/colors";

const FeedItem = ({image, groupName, data} : FeedItemProps) => {
  return (
    <View style={styles.Container}>
      <View style={styles.Circle}>
        <Text style={styles.ImageName}>{image}</Text>
      </View>
      <View style={styles.RightItem}>
        <Text style={styles.GroupName}>{groupName}</Text>
        {data.map(((item, index) => (
          <Text key={index}>{item.friendName} nợ {item.amount}</Text>
        )))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    height: 105,
    alignItems: "center"
  },
  Circle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#707988",
    justifyContent: "center",
    alignItems: "center"
  },
  ImageName: {
    ...Styles.typography.heading.h6_medium
  },
  RightItem: {
    marginLeft: 20,
    gap: 6
  },
  GroupName: {
    ...Styles.typography.heading.h6_medium
  }
})
export default FeedItem;
