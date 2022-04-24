import moment from 'moment'

export const fromNowFilter = {
  filters: {
    fromNow(datetime) {
      if (!datetime) {
        return "---";
      } else {
        return moment(datetime).fromNow();
        // moment().fromNow()  => 這是套件功能  "npm install moment@2.24.0"
      }
    },
  }
}
