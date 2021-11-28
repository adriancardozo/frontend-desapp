import React from 'react'
import { FormattedDate, FormattedTime } from 'react-intl'

const FormattedDateTime = ({ value }) => <><FormattedDate {...{ value }} /> <FormattedTime {...{ value }} /></>

export default FormattedDateTime