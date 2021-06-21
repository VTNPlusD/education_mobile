import en from './en'
import _ from 'lodash'

const defaultTranslate = en
const VITranslate = _.merge(defaultTranslate, {
  screen: {
    splash: {
      content: 'xin chào'
    },
    count: {
      something: ''
    }
  }
})
export default VITranslate
