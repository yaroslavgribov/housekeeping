import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDlEPye_rd-C3J4vAltjsxcOBHPeDLdkGk',
  authDomain: 'housekeeping-6a949.firebaseapp.com',
  databaseURL: 'https://housekeeping-6a949.firebaseio.com',
  projectId: 'housekeeping-6a949',
  storageBucket: '',
  messagingSenderId: '694683179437'
}

const connection = firebase.initializeApp(config)

export const auth = connection.auth()
export const db = connection.database()
export default connection
