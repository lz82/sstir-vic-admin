import { format } from 'date-fns'

export function getFormatDate(val, f) {
  let temp = ''
  if (val) {
    temp = new Date(val)
    return format(temp, f || 'yyyy-MM-dd')
  } else {
    return ''
  }
}
