import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  FlatList,
  Platform,
  SafeAreaView,
} from 'react-native';
import Api from '../../../Constants/Api/Api';
import styles from '../styles/styles';
import LikeIconRed from '../../../Assets/LikeIcon.svg';
import LikeIcon from '../../../Assets/UnLikeIcon.svg';

const UI_TestUI = () => {
  const [data, setData] = useState();
  const getData = async () => {
    try {
      let res = await Api.get();
      console.log('API call', res?.data?.carts);
      setData(res?.data?.carts);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const RenderCard = (item, index) => {
    console.log('item', item?.id == 1 && item?.products);
    return (
      <View key={index} >
        <View >
          {item?.products?.map((_item) => (
            <View style={{
              backgroundColor: 'rgba(245,255,255,0.7)',
              width: '90%',
              alignSelf: 'center',
              margin: 10,
              borderRadius: 10
            }}>
              <View style={{ flexDirection: 'row', margin: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: '600', color: '#000' }}>{_item?.title}</Text>
              </View>

              <View style={{ flexDirection: 'row', margin: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: '600', color: '#000', marginRight: 10, textDecorationLine: 'line-through' }}>{_item?.total}</Text>
                <Text style={{ fontSize: 16, fontWeight: '600', color: '#000' }}>{_item?.discountedPrice}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.Main}>
        <View style={styles.Header}>
          <View>
            <Text style={styles.HeaderText}>Let's Find</Text>
          </View>
          <View>
            <Text style={styles.HeaderBigText}>Favourite plant</Text>
          </View>
          <View style={styles.SearchContainer}>
            <View style={styles.TextInputContainer}>
              <TextInput
                placeholder="Search"
                placeholderTextColor={'gray'}
                style={styles.TextInputStyle}
              />
            </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.IconContainer}>
              <Image
                source={require('../../../Assets/searchIcon.jpg')}
                resizeMode="contain"
                style={styles.SearchIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Body}>
          <FlatList
            data={data}
            style={{ flex: 1 }}
            renderItem={({ item, index }) => RenderCard(item, index)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UI_TestUI;

///*
//<KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={{flex: 1}}>
//*/
