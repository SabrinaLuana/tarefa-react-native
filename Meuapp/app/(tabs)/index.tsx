import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#EAEAEA', padding: 16 }}>
      

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: '600' }}>Best Dress Collection</Text>
        <Ionicons name="cart-outline" size={24} color="black" />
      </View>


      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 16}}>
        <TouchableOpacity style={{ paddingVertical: 6, paddingHorizontal: 12, backgroundColor: 'white', borderRadius: 20, marginRight: 8, marginBottom: 8 }}>
          <Text style={{ fontSize: 14 }}>Category ▼</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingVertical: 6, paddingHorizontal: 12, backgroundColor: 'white', borderRadius: 20, marginRight: 8, marginBottom: 8 }}>
          <Text style={{ fontSize: 14 }}>Color ▼</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingVertical: 6, paddingHorizontal: 12, backgroundColor: 'white', borderRadius: 20, marginRight: 8, marginBottom: 8 }}>
          <Text style={{ fontSize: 14 }}>Size ▼</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingVertical: 6, paddingHorizontal: 12, backgroundColor: 'white', borderRadius: 20, marginRight: 8, marginBottom: 8 }}>
          <Text style={{ fontSize: 14 }}>Price ▼</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingVertical: 6, paddingHorizontal: 12, backgroundColor: 'white', borderRadius: 20, marginRight: 8, marginBottom: 8 }}>
          <Text style={{ fontSize: 14 }}>More ▼</Text>
        </TouchableOpacity>
      </View>


      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
        <View style={{ width: '46%', backgroundColor: 'white', padding: 8, borderRadius: 10 }}>
          <Image 
            source={require('../../assets/images/Mulher.png')} 
            style={{ width: '90%', height: 120, borderRadius: 10, marginBottom: 6, alignSelf: 'center' }} 
          />
          <Text style={{ fontSize: 15, fontWeight: '500', marginBottom: 2, textAlign: 'center' }}>Dress Name</Text>
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#e91e63', textAlign: 'center' }}>$299</Text>
        </View>

        <View style={{ width: '46%', backgroundColor: 'white', padding: 8, borderRadius: 10 }}>
          <Image 
            source={require('../../assets/images/Mulher.png')} 
            style={{ width: '90%', height: 120, borderRadius: 10, marginBottom: 6, alignSelf: 'center' }} 
          />
          <Text style={{ fontSize: 15, fontWeight: '500', marginBottom: 2, textAlign: 'center' }}>Dress Name</Text>
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#e91e63', textAlign: 'center' }}>$299</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
        <View style={{ width: '46%', backgroundColor: 'white', padding: 8, borderRadius: 10 }}>
          <Image 
            source={require('../../assets/images/Mulher.png')} 
            style={{ width: '90%', height: 120, borderRadius: 10, marginBottom: 6, alignSelf: 'center' }} 
          />
          <Text style={{ fontSize: 15, fontWeight: '500', marginBottom: 2, textAlign: 'center' }}>Dress Name</Text>
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#e91e63', textAlign: 'center' }}>$299</Text>
        </View>

        <View style={{ width: '46%', backgroundColor: 'white', padding: 8, borderRadius: 10 }}>
          <Image 
            source={require('../../assets/images/Mulher.png')} 
            style={{ width: '90%', height: 120, borderRadius: 10, marginBottom: 6, alignSelf: 'center' }} 
          />
          <Text style={{ fontSize: 15, fontWeight: '500', marginBottom: 2, textAlign: 'center' }}>Dress Name</Text>
          <Text style={{ fontSize: 14, fontWeight: '600', color: '#e91e63', textAlign: 'center' }}>$299</Text>
        </View>
      </View>

    </View>
  );
}
