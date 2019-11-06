const ApiResponseStatusCode = {
  SUCCESS: '200',
  AUTHORIZED: '401'
}

const action = {
  CREATE: 0,
  UPDATE: 1,
  DELETE: 2
}

const modalSize = {
  SMALL: 'modal-sm',
  LARGE: 'modal-lg'
}

const config = {
  clientId: 'MobileApp',
  clientSecret: 'CpExNwQEyVeY3CD1jGtl2mj6OBdBllcG',
  grantType: 'client_credentials'
}

export { ApiResponseStatusCode, config, action, modalSize }
