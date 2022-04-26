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


export const emptyImageFilter = {
  filters: {
    emptyImage(src) {
      return src || 'https://via.placeholder.com/350x220/DFDFDF?text=No+Image'
    }
  }
}