import axios from './AxiosUserConfig'
import FormData from 'form-data'

import { Modules } from '../test'

const getData = userId => {
  return {
    status: 'OK',
    status_code: '200',
    response: Modules
  }
}

export default {
  getData
}
