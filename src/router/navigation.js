import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Splash from '../screen/splash';
import Login from '../auth/login';
import TambahSupplier from '../auth/tambahSupplier';
import TambahInventory from '../screen/staff/tambahInventory';
import HomeKasir from '../screen/kasir/homeKasir';
import HomePimpinan from '../screen/pimpinan/homePimpinan';
import HomeMember from '../screen/member/homeMember';
import HomeStaff from '../screen/staff/homeStaff';
import Forpass from '../auth/forpass';
import Kasir from './kasir';
import MemberKasir from '../screen/kasir/memberKasir';
import RegisterMember from '../auth/registerMember';
import EditMember from '../screen/kasir/editMember';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DetailKategoryKasir from '../screen/kasir/detailKategoryKasir';
import InventoryStaff from '../screen/staff/inventoryStaff';
import CategoryStaff from '../screen/staff/kategoryStaff';
import PembelianStaff from '../screen/staff/pembelianStaff';
import PengeluaranStaff from '../screen/staff/pengluaranStaff';
import LaporanBulananPimpinan from '../screen/pimpinan/laporanBulananPimpinan';
import LaporanHarianPimpinan from '../screen/pimpinan/laporanHarianPimpinan';
import BeliStaff from '../screen/staff/beliStaff';
import SupplaierStaff from '../screen/staff/supplaierStaff';
import KeluarStaff from '../screen/staff/keluarStaff';
import InventoryKasir from '../screen/kasir/inventotryKasir';
import KategoryBarangKasir from '../screen/kasir/kategoryBarangKasir';
import TransaksiKasir from '../screen/kasir/transaksiKasir';
import FixTransaksiKasir from '../screen/kasir/fixTransaksiKasir';
import HistoryTransaksiKasir from '../screen/kasir/historyTransaksiKasir';

const Stack = createStackNavigator();
const Top = createMaterialTopTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animationEnabled: false,
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forpass" component={Forpass} />

        {/* untuk Kasir */}
        <Stack.Screen name="kasir" component={HomeKasir} />
        <Stack.Screen name="MemberKasir" component={MemberKasir} />
        <Stack.Screen name="RegisterMember" component={RegisterMember} />
        <Stack.Screen name="EditMember" component={EditMember} />
        <Stack.Screen name="InventoryKasir" component={InventoryKasir} />
        <Stack.Screen name="TransaksiKasir" component={TransaksiKasir} />
        <Stack.Screen name="FixTransaksiKasir" component={FixTransaksiKasir} />

        <Stack.Screen
          name="HistoryTransaksiKasir"
          component={HistoryTransaksiKasir}
        />

        <Stack.Screen
          name="KategoryBarangKasir"
          component={KategoryBarangKasir}
        />

        <Stack.Screen
          name="DetailKategoryKasir"
          component={DetailKategoryKasir}
        />

        {/* untuk Pimpinan */}
        <Stack.Screen name="pimpinan" component={HomePimpinan} />
        <Stack.Screen
          name="LaporanBulananPimpinan"
          component={LaporanBulananPimpinan}
        />
        <Stack.Screen
          name="LaporanHarianPimpinan"
          component={LaporanHarianPimpinan}
        />

        {/* untuk Member */}
        <Stack.Screen name="member" component={HomeMember} />
        {/* untuk Staff */}
        <Stack.Screen name="staff" component={HomeStaff} />
        <Stack.Screen name="InventoryStaff" component={InventoryStaff} />
        <Stack.Screen name="CategoryStaff" component={CategoryStaff} />
        <Stack.Screen name="PembelianStaff" component={PembelianStaff} />
        <Stack.Screen name="PengeluaranStaff" component={PengeluaranStaff} />
        <Stack.Screen name="TambahSupplier" component={TambahSupplier} />
        <Stack.Screen name="TambahInventory" component={TambahInventory} />
        <Stack.Screen name="BeliStaff" component={BeliStaff} />
        <Stack.Screen name="SupplaierStaff" component={SupplaierStaff} />
        <Stack.Screen name="KeluarStaff" component={KeluarStaff} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
