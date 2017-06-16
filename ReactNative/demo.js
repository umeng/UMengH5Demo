import React, { Component } from 'react';
import {
    AppRegistry,
    ScrollView,
    View,
    Text,
    StyleSheet,
    Alert,
    Image,
} from 'react-native';
var UMNative = require('react-native').NativeModules.UMNative;

export default class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        selectedTab:'home'
        };
    }
    componentWillUnmount(){
        o2cFun.remove();
    }
    render() {
        return (
                <ScrollView contentcontainerstyle={styles.contentContainer}>
                <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={styles.titleStyle}>Umeng React Native demo</Text>
                
                
                <Text
                onPress={()=>{
                UMNative.onEvent("Himi");
                }}
                style={styles.himiTextStyle}>onEvent
                </Text>
                
                <Text
                onPress={()=>{
                UMNative.onEventWithLabel("eventB","lableA");
                }}

                style={styles.himiTextStyle}>onEventWithLabel
                </Text>
        
                <Text
                onPress={()=>{
                    UMNative.onEventWithParameters("eventC",{name:'umeng',age:'22'});
                    }}
        
                style={styles.himiTextStyle}>onEventWithParameters
                </Text>
                
                <Text
                onPress={()=>{
                UMNative.onEventWithCounter("eventD",{name:'umengA',age:'27'},36);
                }}
                
                style={styles.himiTextStyle}>onEventWithCounter
                </Text>

                <Text
                onPress={()=>{
                UMNative.onPageBegin("pageA");
                }}
                
                style={styles.himiTextStyle}>onPageBegin
                </Text>
                
                <Text
                onPress={()=>{
                UMNative.onPageEnd("pageA");
                }}
                
                style={styles.himiTextStyle}>onPageEnd
                </Text>
                
                <Text style={styles.titleStyle}>Umeng Dplus</Text>
                
                <Text
                onPress={()=>{
                UMNative.track("DplusA");
                }}
                
                style={styles.himiTextStyle}>track
                </Text>
                
                <Text
                onPress={()=>{
                UMNative.trackWithProperty("DplusB",{
                               name:'Himi',
                               age:'12'
                               });
                }}
                
                style={styles.himiTextStyle}>trackWithProperty
                </Text>
                
                <Text
                onPress={()=>{
                UMNative.registerSuperProperty({
                               name:'Himi',
                               age:'16'
                               });
                }}
                
                style={styles.himiTextStyle}>registerSuperProperty
                </Text>
                
                <Text
                onPress={()=>{
                UMNative.unregisterSuperProperty("name");
                }}
                
                style={styles.himiTextStyle}>unregisterSuperProperty
                </Text>
                
                <Text
                onPress={()=>{
                UMNative.getSuperProperty('age',(callBack)=>{
                                 
                                 Alert.alert(callBack);
                                 
                                 });
                }}
                
                style={styles.himiTextStyle}>getSuperProperty
                </Text>
                
                <Text
                onPress={()=>{
                UMNative.getSuperProperties((callBack)=>{
                                          
                                          Alert.alert(callBack);
                                          
                                          });
                }}
                
                style={styles.himiTextStyle}>getSuperProperties
                </Text>

                <Text
                onPress={()=>{
                UMNative.clearSuperProperties();
                }}
                
                style={styles.himiTextStyle}>clearSuperProperties
                </Text>
                
                <Text
                onPress={()=>{
                UMNative.setFirstLaunchEvent([
                                              'array1','array2','array3'
                                              ]);
                }}
                
                style={styles.himiTextStyle}>setFirstLaunchEvent
                </Text>
                
                <Text style={styles.titleStyle}>Umeng Game</Text>

                <Text
                onPress={()=>{
                UMNative.profileSignInWithPUID("puidA");
                }}
                
                style={styles.himiTextStyle}>profileSignInWithPUID
                </Text>
                
                <Text
                onPress={()=>{
                UMNative.profileSignInWithPUIDWithProvider("providerA","puidB");
                }}
                
                style={styles.himiTextStyle}>profileSignInWithPUIDWithProvider
                </Text>
                
                <Text
                onPress={()=>{
                UMNative.profileSignOff();
                }}
                
                style={styles.himiTextStyle}>profileSignOff
                </Text>
                
                <Text
                onPress={()=>{
                UMNative.setUserLevelId(22);
                }}
                
                style={styles.himiTextStyle}>setUserLevelId
                </Text>
                
                <Text
                onPress={()=>{
                UMNative.startLevel("123");
                }}
                
                style={styles.himiTextStyle}>startLevel
                </Text>
                
                <Text
                onPress={()=>{
                UMNative.finishLevel("232");
                }}
                
                style={styles.himiTextStyle}>finishLevel
                </Text>
                
                <Text
                onPress={()=>{
                UMNative.failLevel("532");
                }}
                
                style={styles.himiTextStyle}>failLevel
                </Text>
                
                <Text
                onPress={()=>{
                UMNative.exchange(21,"typeA",11,9,"idA");
                }}
                
                style={styles.himiTextStyle}>exchange
                </Text>
                
                <Text
                onPress={()=>{
                UMNative.pay(12,6,11);
                }}
                
                style={styles.himiTextStyle}>pay
                </Text>
                
                <Text
                onPress={()=>{
                UMNative.payWithItem(22,"itemD",7,17,33);
                }}
                
                style={styles.himiTextStyle}>payWithItem
                </Text>
                
                <Text
                onPress={()=>{
                UMNative.buy("itemC",5,12);
                }}
                
                style={styles.himiTextStyle}>buy
                </Text>
                
                <Text
                onPress={()=>{
                UMNative.use("itemB",11,22);
                }}
                
                style={styles.himiTextStyle}>use
                </Text>
                
                <Text
                onPress={()=>{
                UMNative.bonus(112,6);
                }}
                
                style={styles.himiTextStyle}>bonus
                </Text>
                
                <Text
                onPress={()=>{
                UMNative.bonusWithItem("itemA",2,231,10);
                }}
                
                style={styles.himiTextStyle}>bonusWithItem
                </Text>
                
                </View>
                </ScrollView>
                );
    }
};
var styles = StyleSheet.create({
                               contentContainer:{
                               paddingVertical:20
                               },
                               himiTextStyle:{
                               backgroundColor:'#eee',
                               color:'#002',
                               fontSize:16,
                               marginTop:8,
                               },
                               titleStyle:{
                               backgroundColor:'#fff',
                               color:'#e02',
                               fontSize:18,
                               marginTop:15,
                               },
                               });

AppRegistry.registerComponent('Demo', () => Demo);
