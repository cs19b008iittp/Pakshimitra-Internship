import React from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, Picker } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import {  Linking } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const SignUp = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.blueBackground}>
        <View style={[styles.blueContent]}>
     {'\n'}
          <Text style={[styles.gstText, {marginTop: 40}, {marginBottom: 30}]}>
          
            Did you know?{"\n"}
          </Text>
          <Text style={styles.in}>
            The GST council has made e-invoicing {"\n"} mandatory for businesses
            with a {"\n"} turnover of ₹10Cr. or more from {"\n"} October, 2022.
            Zoho Books is here{"\n"} to help.
          </Text>
          <Text style={styles.supportText}>
          Reach out to{'\n'}
  <Text
    style={styles.link}
    onPress={() => Linking.openURL('mailto:support.india@zohobooks.com')}
  >
    support.india@zohobooks.com
  </Text>{'\n'}
  for more info.
          </Text>
        </View>
        <Image source={require('./assets/einvoice-signup.png')} style={styles.booksLogo} />
      </View>
      <View style={styles.whiteBackground}>
      <View style={styles.createAccountContainer}>
          <Text style={styles.createAccountText}>Experience PREMIUM plan for 14 days</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Company name" />
          </View>
          <View style={styles.phoneInputContainer}>
            <Text style={styles.phoneInputCountryCode}>+91</Text>
            <TextInput style={styles.phoneInput} placeholder="Mobile number" />
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Email address" />
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
          </View>
          <View style={styles.pickerContainer}>
            <Picker style={styles.picker}>
              <Picker.Item label="India" value="india" />
              <Picker.Item label="United States" value="us" />
              <Picker.Item label="United Kingdom" value="uk" />
            </Picker>
          </View>
      
          <View style={styles.pickerContainer}>
          <Picker style={styles.picker}>
              <Picker.Item label="AndhraPradesh" value="AndhraPradesh" />
              <Picker.Item label="Telangana" value="Telangana" />
              <Picker.Item label="TamilNadu" value="TamilNadu" />
            </Picker>
          </View>
          <Text style={[styles.indiaDataCenterText, {marginBottom: 10}]}>Your data will be in INDIA data center.</Text>
        
          <View style={[styles.termsContainer, {flexDirection: 'row'},{marginBottom: 10}]}>
        
          <TouchableOpacity style={styles.checkbox} onPress={() => setIsChecked(!isChecked)}>
  <View style={[styles.checkboxInner, isChecked && styles.checkboxInnerChecked]} />
</TouchableOpacity>

  <View style={styles.termsTextContainer}>
    <Text style={styles.termsText}>
      {"  "}I agree to the{" "}
      <Text style={styles.termsLink}>Terms of Service</Text> and{" "}
      <Text style={styles.termsLink}>Privacy Policy</Text>
    </Text>
  </View>
</View>

          <TouchableOpacity style={styles.createButton}>
            <Text style={styles.createButtonText}>CREATE ACCOUNT</Text>
          </TouchableOpacity>
          <View style={styles.Container}>
          <Text style={styles.indiaDataCenterText}>or sign in using</Text>
<View style={styles.socialIconsContainer}>
  <TouchableOpacity style={styles.socialIcon}>
    <MaterialIcons name="facebook" size={30} />
  </TouchableOpacity>
  <TouchableOpacity style={styles.socialIcon}>
    <Image
      source={require('./assets/google.png')}
      style={styles.socialIconImage}
    />
  </TouchableOpacity>
  <TouchableOpacity style={styles.socialIcon}>
    <Image
      source={require('./assets/twitter-logo.jpg')}
      style={styles.socialIconImage}
    />
  </TouchableOpacity>
</View>
</View>


        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    color: 'skyblue',
    textDecorationLine: 'underline',
  },
  signInText: {
    color: "#007bff",
    },
    indiaDataCenterText: {
      fontSize: 16,
      fontWeight: '350',
      color: 'black',
      
    
    },
    socialIconsContainer: {
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      marginTop: 20,
    },
    inputIcon: {
      marginLeft: 10,
      marginRight: 5,
      color: '#888',
    },
    socialIcon: {
      marginLeft: 20,
    },
  blueBackground: {
    flex: 1,
    backgroundColor: '#007bff',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  socialIconImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  pickerContainer: {
    width: '100%',
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 12,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    
  },
  picker: {
  
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 3,
    padding: 8,
    fontSize: 14,
    color: '#333333',
    height: 50,
  },
  whiteBackground: {
    flex: 2,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  blueContent: {
    marginBottom: 30,
  },
  createAccountText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333333',
    lineHeight: 36,
  },
  
  gstText: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: 'bold',

    lineHeight: 3,
    marginBottom: 20,
  },
  in: {
    color: '#ffffff',
    fontSize: 20,
  
    lineHeight: 30,
    marginBottom: 20,
  },
  createAccountContainer: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  createButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  createButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
        
  supportText: {
    color: '#ffffff',
    fontSize: 21,
    
  },
  supportLink: {
    color: '#ffffff',
    textDecorationLine: 'underline',
  },
  booksLogo: {
    width: 518,
    height: 382,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  signInContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  signInText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'right',
  },
  inHeaderText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'right',
    position: 'absolute',
    top: 20,
    right: 20,
  },
  formContainer: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007bff',
  },
  inputContainer: {
    marginBottom: 10,
  },
  inputLabel: {
    marginBottom: 5,
    color: '#007bff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 3,
    padding: 8,
    fontSize: 14,
    color: '#333333',
    height: 50,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  phoneInputCountryCode: {
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#828282',
    fontWeight: 'bold',
  },
  phoneInputSeparator: {
    backgroundColor: '#828282',
    height: 20,
    width: 1,
    marginHorizontal: 10,
  },
  phoneInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333333',
    borderBottomWidth: 1,
    borderBottomColor: '#828282',
  },
  countryDropdown: {
    borderWidth: 1,
    borderColor: '#828282',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
  },
  stateDropdown: {
    borderWidth: 1,
    borderColor: '#828282',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
  },
  termsAndPrivacyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: 12,
    height: 12,
    borderRadius: 3,
    backgroundColor: 'transparent',
  },
  checkboxInnerChecked: {
    backgroundColor: 'green',
    borderWidth: 0,
  },
  termsAndPrivacyText: {
    fontSize: 16,
    color: '#828282',
  },
  createButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
  },
  createButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});




export default SignUp;
