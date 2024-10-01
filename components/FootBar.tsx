import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, usePathname } from 'expo-router';

const FootBar = () => {
  const pathname = usePathname();  
  const [activePage, setActivePage] = useState(pathname);  
  useEffect(() => {
    setActivePage(pathname);
  }, [pathname]);

const isActive = (path) => path === activePage;

  return (
    <View style={styles.container}>

      <TouchableOpacity>
        <Link href={'/'}>
          <Ionicons
            style={[styles.icon, { color: isActive('/') ? 'black' : 'green' }]}
            name="home-sharp"
            size={32}
          />
        </Link>
      </TouchableOpacity>

      <TouchableOpacity>
        <Link href={'/search'}>
          <Ionicons
            style={[styles.icon, { color: isActive('/search') ? 'black' : 'green' }]}
            name="search"
            size={32}
          />
        </Link>
      </TouchableOpacity>

      <TouchableOpacity>
        <Link href={'/music'}>
          <Ionicons
            style={[styles.icon, { color: isActive('/music') ? 'black' : 'green' }]}
            name="disc"
            size={32}
          />
        </Link>
      </TouchableOpacity>

      <TouchableOpacity>
        <Link href={'/profile'}>
          <Ionicons
            style={[styles.icon, { color: isActive('/profile') ? 'black' : 'green' }]}
            name="person"
            size={32}
          />
        </Link>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',  // Align items in a row
    justifyContent: 'space-between',  // Space the items evenly across the container
    alignItems: 'center',  // Vertically center the icons
    paddingHorizontal: 20, // Add padding on sides
    paddingVertical: 10,  // Add vertical padding
    backgroundColor: '#f8f8f8',  // Optional background color
  },
  icon: {
    alignSelf: 'center',
    paddingHorizontal: 50,
    margin: 10,
  },
});

export default FootBar;
