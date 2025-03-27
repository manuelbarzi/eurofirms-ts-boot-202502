let re = /^[1-3a-cA-C]+$/
// /^[1-3a-cA-C]+$/
re = new RegExp('^[1-3a-cA-C]+$')
// /^[1-3a-cA-C]+$/
re.test('1bA')
// true
re.test('1bD')
// false
