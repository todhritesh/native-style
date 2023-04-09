import React, { useState } from 'react';
import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';

interface Person {
  id: string;
  name: string;
}

interface Reactions {
  like: Person[];
  love: Person[];
  laugh: Person[];
  hate: Person[];
}

interface Props {
  reactions: Reactions;
}

const Post: React.FC<Props> = ({ reactions }) => {
  const [showLikes, setShowLikes] = useState(false);
  const [activeTab, setActiveTab] = useState<number>(0);

  const renderScene = SceneMap({
    like: () => <Likes people={reactions.like} />,
    love: () => <Likes people={reactions.love} />,
    laugh: () => <Likes people={reactions.laugh} />,
    hate: () => <Likes people={reactions.hate} />,
  });

  const renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      tabStyle={styles.tab}
      labelStyle={styles.label}
    />
  );

  const handleIndexChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <View>
      <Button title="Show likes" onPress={() => setShowLikes(true)} />

      <Modal visible={showLikes} onRequestClose={() => setShowLikes(false)}>
        <TabView
          navigationState={{ index: activeTab, routes: [{ key: 'like', title: 'Like' }, { key: 'love', title: 'Love' }, { key: 'laugh', title: 'Laugh' }, { key: 'hate', title: 'Hate' }] }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={handleIndexChange}
          initialLayout={{ width: 100, height: 0 }}
        />
      </Modal>
    </View>
  );
};

interface LikesProps {
  people: Person[];
}

const Likes: React.FC<LikesProps> = ({ people }) => (
  <View style={styles.likesContainer}>
    {people.map((person) => (
      <Text key={person.id}>{person.name}</Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  likesContainer: {
    flex: 1,
    padding: 16,
  },
  indicator: {
    backgroundColor: '#4CAF50',
  },
  tabBar: {
    backgroundColor: '#FFFFFF',
    elevation: 0,
  },
  tab: {
    width: 100,
  },
  label: {
    color: '#000000',
  },
});

export default Post;
