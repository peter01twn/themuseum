export const addClass = (addClassNames = '') =>
  (baseClass = '') => {
    const adder = (addClassName, baseClass) => {
      const firstRe = new RegExp(`^(${addClassName} )`);
      const innerRe = new RegExp(` ${addClassName}`);
      if (baseClass.match(firstRe) || baseClass.match(innerRe)) {
        return baseClass
      } else {
        return baseClass + ' ' + addClassName
      }
    }
    if (typeof addClassNames === 'object') {
      return addClassNames.reduce((className, addClassName) => {
        return adder(addClassName, className)
      }, baseClass)
    }
    return adder(addClassNames, baseClass)
  }

export const removeClass = (removeClassNames = '') =>
  (baseClass = '') => {
    const remover = (removeClassName, baseClass) => {
      const firstRe = new RegExp(`^(${removeClassName} )`);
      const innerRe = new RegExp(` ${removeClassName}`);
      return baseClass.replace(innerRe, '').replace(firstRe, '')
    }
    if (typeof removeClassNames === 'object') {
      return removeClassNames.reduce((className, removeClassName) => {
        return remover(removeClassName, className)
      }, baseClass)
    }
    return remover(removeClassNames, baseClass)
  }

export const toggleClass = (toggleClassNames = '') =>
  (baseClass = '') => {
    const toggler = (toggleClassName, baseClass) => {
      // const innerRe = new RegExp(` ${toggleClassName}`);
      // const firstRe = new RegExp(`^(${toggleClassName} )`);
      // let newClass = baseClass.replace(innerRe, '').replace(firstRe, '')
      // if (newClass === baseClass) {
      //   newClass = baseClass + ' ' + toggleClassName
      // }
      // return newClass
      let newClass = removeClass(toggleClassName, baseClass)
      if (newClass === baseClass) {
        newClass = baseClass + ' ' + toggleClassName
      }
      return newClass
    }
    if (typeof toggleClassNames === 'object') {
      return toggleClassNames.reduce((className, toggleClassName) => {
        return toggler(toggleClassName, className)
      }, baseClass)
    }
    return toggler(toggleClassNames, baseClass)
  }