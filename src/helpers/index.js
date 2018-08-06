export * from './style'

export const getFormData = (...args) => {
  let [e, validate, onInvalid] = args
  if (!validate) validate = x => true
  if (!onInvalid) onInvalid = () => {}

  e.preventDefault()
  const children = e.target.children
  const variables = {}

  for (let i = 0; i < children.length; i++) {
    const child = children[i]
    if (child) {
      const input = child.querySelectorAll('input')[0] || child
      if (input && input.tagName === 'INPUT' && input.type !== 'submit') {
        const { value, name } = input
        if (validate(value, name)) {
          variables[name] = value
        } else {
          onInvalid(value, name)
          return
        }
      }
    }
  }

  return variables
}

// better fetch
export const betch = (url, opts) => {
  return fetch(url, opts)
    .then(x => x.ok ? x : Promise.reject(x))
}

export const delay = (ms = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}
