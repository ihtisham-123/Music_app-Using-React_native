// toggleHeart.js
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const ToggleHeart = () => {
  const [liked, setLiked] = useState(false);

  const toggleHeart = () => {
    setLiked(!liked);
  };

  return (
    <TouchableOpacity onPress={toggleHeart}>
      <Ionicons
        name={liked ? 'heart-circle' : 'heart-dislike-circle'}
        size={32}
        color="green"
      />
    </TouchableOpacity>
  );
};

export default ToggleHeart;
