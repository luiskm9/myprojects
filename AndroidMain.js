/**
 * Concept game that generates objects on a grid (3x4) selected at random.
 * these objects require clicks to be destroyed; from 1 to 3 slected at random. 
 */
'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import TimerMixin from 'react-timer-mixin';

var totalButtons = 12;
var buttonStyles = [];
var buttonClicks = [];
var buttonWidth = 80;
var buttonHeight = 80;
for(var i = 0; i < totalButtons; i++){
  buttonClicks[i] = {
    id:i,
    clicksToDestroy:0,
    isVisible: false
  };
}
var textVar = '0'
var timer = 0;

export default class AndroidMain extends Component<{}> {
  static navigationOptions = {
    title: 'Test App'
  };

  constructor() {
    super();
    this.state = {
      title0: 0,
      title1: 0,
      title2: 0,
      title3: 0,
      title4: 0,
      title5: 0,
      title6: 0,
      title7: 0,
      title8: 0,
      title9: 0,
      title10: 0,
      title11: 0
    }
    this._click = this._click.bind(this);

    this.setTimeout = setInterval(() => {
      timer+=100;
      var noneVisibleArray = [];
      var temp = 0;

      for(var i = 0; i < buttonClicks.length; i++){
        if(!buttonClicks[i].isVisible){
          noneVisibleArray[temp] = buttonClicks[i].id;
          temp++;
        }
      }
      if(timer == 500){
        var random0to2 = Math.floor(Math.random() * 3);
        var randomButton = Math.floor(Math.random() * noneVisibleArray.length);

        if(noneVisibleArray.length > 0){
          buttonStyles[noneVisibleArray[randomButton]].button = {
            backgroundColor: '#2B2432',
            width: buttonWidth,
            height: buttonWidth,
            marginRight: 5,
            marginTop: 5,
            justifyContent: 'center',
            alignItems: 'center',
          };
          buttonClicks[noneVisibleArray[randomButton]].isVisible = true;
          buttonClicks[noneVisibleArray[randomButton]].clicksToDestroy = random0to2+1;
        }

        if(noneVisibleArray[randomButton] == 0)
          this.setState({title0:buttonClicks[0].clicksToDestroy});
        else if(noneVisibleArray[randomButton] == 1)
          this.setState({title1:buttonClicks[1].clicksToDestroy});
        else if(noneVisibleArray[randomButton] == 2)
          this.setState({title2:buttonClicks[2].clicksToDestroy});
        else if(noneVisibleArray[randomButton] == 3)
          this.setState({title3:buttonClicks[3].clicksToDestroy});
        else if(noneVisibleArray[randomButton] == 4)
          this.setState({title4:buttonClicks[4].clicksToDestroy});
        else if(noneVisibleArray[randomButton] == 5)
          this.setState({title5:buttonClicks[5].clicksToDestroy});
        else if(noneVisibleArray[randomButton] == 6)
          this.setState({title6:buttonClicks[6].clicksToDestroy});
        else if(noneVisibleArray[randomButton] == 7)
          this.setState({title7:buttonClicks[7].clicksToDestroy});
        else if(noneVisibleArray[randomButton] == 8)
          this.setState({title8:buttonClicks[8].clicksToDestroy});
        else if(noneVisibleArray[randomButton] == 9)
          this.setState({title9:buttonClicks[9].clicksToDestroy});
        else if(noneVisibleArray[randomButton] == 10)
          this.setState({title10:buttonClicks[10].clicksToDestroy});
        else if(noneVisibleArray[randomButton] == 11)
          this.setState({title11:buttonClicks[11].clicksToDestroy});
        timer = 0;
      }
    }, 100);
  }

  //var timer = setInterval(theFunction, 1000);
 //  backgroundColor: '#2B2432',

  _click(param){
    buttonClicks[param.id].clicksToDestroy--;
    if(buttonClicks[param.id].clicksToDestroy == 0){
      buttonClicks[param.id].clicksToDestroy = 0;
      buttonClicks[param.id].isVisible = false;
      buttonStyles[param.id].button = {
        backgroundColor: 'transparent',
        width: buttonWidth,
        height: buttonWidth,
        marginRight: 5,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
      };
    }
    //alert(String(buttonStyles[param.id].button.backgroundColor));
    if(param.id == 0){
      this.setState({title0:buttonClicks[param.id].clicksToDestroy});
    }
    else if(param.id == 1){
      this.setState({title1:buttonClicks[param.id].clicksToDestroy});
    }
    else if(param.id == 2){
      this.setState({title2:buttonClicks[param.id].clicksToDestroy});
    }
    else if(param.id == 3){
      this.setState({title3:buttonClicks[param.id].clicksToDestroy});
    }
    else if(param.id == 4){
      this.setState({title4:buttonClicks[param.id].clicksToDestroy});
    }
    else if(param.id == 5){
      this.setState({title5:buttonClicks[param.id].clicksToDestroy});
    }
    else if(param.id == 6){
      this.setState({title6:buttonClicks[param.id].clicksToDestroy});
    }
    else if(param.id == 7){
      this.setState({title7:buttonClicks[param.id].clicksToDestroy});
    }
    else if(param.id == 8){
      this.setState({title8:buttonClicks[param.id].clicksToDestroy});
    }
    else if(param.id == 9){
      this.setState({title9:buttonClicks[param.id].clicksToDestroy});
    }
    else if(param.id == 10){
      this.setState({title10:buttonClicks[param.id].clicksToDestroy});
    }
    else if(param.id == 11){
      this.setState({title11:buttonClicks[param.id].clicksToDestroy});
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <TouchableOpacity style={buttonStyles[0].button} onPress={() => this._click({id:0, object:this})} activeOpacity = {0.9}>
          <Text style={styles.buttonText}>{this.state.title0}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonStyles[1].button} onPress={() => this._click({id:1, object:this})} activeOpacity = {0.9}>
          <Text style={styles.buttonText}>{this.state.title1}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonStyles[2].button} onPress={() => this._click({id:2, object:this})} activeOpacity = {0.9}>
          <Text style={styles.buttonText}>{this.state.title2}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonStyles[3].button} onPress={() => this._click({id:3, object:this})} activeOpacity = {0.9}>
          <Text style={styles.buttonText}>{this.state.title3}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonStyles[4].button} onPress={() => this._click({id:4, object:this})} activeOpacity = {0.9}>
          <Text style={styles.buttonText}>{this.state.title4}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonStyles[5].button} onPress={() => this._click({id:5, object:this})} activeOpacity = {0.9}>
          <Text style={styles.buttonText}>{this.state.title5}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonStyles[6].button} onPress={() => this._click({id:6, object:this})} activeOpacity = {0.9}>
          <Text style={styles.buttonText}>{this.state.title6}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonStyles[7].button} onPress={() => this._click({id:7, object:this})} activeOpacity = {0.9}>
          <Text style={styles.buttonText}>{this.state.title7}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonStyles[8].button} onPress={() => this._click({id:8, object:this})} activeOpacity = {0.9}>
          <Text style={styles.buttonText}>{this.state.title8}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonStyles[9].button} onPress={() => this._click({id:9, object:this})} activeOpacity = {0.9}>
            <Text style={styles.buttonText}>{this.state.title9}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonStyles[10].button} onPress={() => this._click({id:10, object:this})} activeOpacity = {0.9}>
            <Text style={styles.buttonText}>{this.state.title10}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonStyles[11].button} onPress={() => this._click({id:11, object:this})} activeOpacity = {0.9}>
            <Text style={styles.buttonText}>{this.state.title11}</Text>
        </TouchableOpacity>

      </View>
    );
  }

}

for(var x = 0; x < totalButtons; x++){
  buttonStyles[x] = StyleSheet.create({
    button: {
      backgroundColor: 'transparent',
      width: buttonWidth,
      height: buttonWidth,
      marginRight: 5,
      marginTop: 5,
      opacity:1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderColor:'#D35058',
    borderWidth: 5
  },
  buttonText: {
    fontSize: 40,
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
    textAlignVertical:'center',
    fontFamily:'Arial Nova'
  }
});
