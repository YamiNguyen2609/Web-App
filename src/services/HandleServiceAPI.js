import axios from './AxiosUserConfig'
import FormData from 'form-data'

import { onAddTest, onDeleteTest, onUpdateTest } from '../test'

const onCreate = async (api, params) => {
  var data = new FormData()
  for (var el in params) {
    data.append(el, params[el])
  }

  return {
    status: 'OK',
    status_code: '200',
    response: onAddTest(api, params)
  }
  //return axios.post(api, data)
}

const onUpdate = async (api, params) => {
  var data = new FormData()
  for (var e in params) {
    data.append(e, params[e])
  }
  return {
    status: 'OK',
    status_code: '200',
    response: onUpdateTest(api, params)
  }
  //return axios.put(api, data)
}

const onDelete = async (api, id) => {
  //return axios.delete(api, { id: id })
  return {
    status: 'OK',
    status_code: '200',
    response: onDeleteTest(api, id)
  }
}

export default {
  onCreate,
  onUpdate,
  onDelete
}
