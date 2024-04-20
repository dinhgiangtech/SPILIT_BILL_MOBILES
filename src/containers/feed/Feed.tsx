import {observer} from "mobx-react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Logo from '@/assets/images/Logomark.svg';
import Vector from '@/assets/images/Vector.svg';
import COLORS from "@/theme/colors";
import {Styles} from "@/theme";

const Feed = observer(() => {
  return (
    <View style={styles.HeaderStyle}>
      <TouchableOpacity style={styles.LeftStyle}>
        <Logo width={32} height={32} style={styles.LogoStyle}/>
        <Text style={styles.BranchStyle}>Splitty</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.RightStyle}>
        <Vector width={32} height={32} style={styles.VectorStyle}/>
      </TouchableOpacity>
    </View>
  )
})

const styles = StyleSheet.create({
  HeaderStyle: {
    paddingTop: 24,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.neutral.white.W900,
    height: 72,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBlockColor: "transparent"
  },
  LeftStyle: {
    flexDirection: "row",
    width: 100,
    height: 32,
    gap: 12,
    alignItems: "center"
  },
  LogoStyle: {

  },
  BranchStyle: {
    ...Styles.typography.heading.h4_medium
  },
  RightStyle: {

  },
  VectorStyle: {

  }
})

export default Feed;
