import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, Picker } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    } as React.ViewStyle,

    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    } as React.TextStyle
});

interface Props {
    text: string
}

interface State {
    showText: boolean,
    selectedTab: string
}

class Blink extends Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = { showText: true, selectedTab: null };

        setInterval(() => {
            this.setState({ showText: !this.state.showText });
        }, 1000);
    }
    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {display}
                </Text>
            </View>);
    }
}

export default class App extends Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = { showText: true, selectedTab: 'home' };
    }
    render() {
        let icon = <Image source={require('../img/soginet-icon.png')} />;
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    renderIcon={() => icon}
                    renderSelectedIcon={() => icon}
                    badgeText="1"
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <View style={styles.container}><Text>home</Text></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'profile'}
                    title="Profile"
                    renderIcon={() => icon}
                    renderSelectedIcon={() => icon}
                    renderBadge={() => { }}
                    onPress={() => this.setState({ selectedTab: 'profile' })}>
                    <View><Text>profile</Text></View>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}